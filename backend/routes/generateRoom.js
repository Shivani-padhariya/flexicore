const router = require("express").Router();
const { upload, cloudinary } = require("../config/cloudinary");
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

router.post("/", (req, res) => {
  upload.single("image")(req, res, async (err) => {
    if (err) return res.status(400).json({ success: false, message: err.message });
    if (!req.file) return res.status(400).json({ success: false, message: "No image uploaded" });

    const { surface, roomType, style, description } = req.body;

    try {
      // In a real scenario, you would call Stability AI or OpenAI here.
      // Since we don't have the API keys, we'll implement the logic 
      // but fall back to a "simulated" success if the key is missing.

      const STABILITY_API_KEY = process.env.STABILITY_API_KEY;

      if (!STABILITY_API_KEY) {
        console.warn("⚠️ STABILITY_API_KEY is missing. Returning simulated AI response.");
        // Simulated delay
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        // For simulation, we just return the same image or a placeholder
        // In a real app, this would be the AI generated image URL
        return res.json({
          success: true,
          generatedImageUrl: req.file.path, // Returning original for now as placeholder
          message: "Simulation mode: Add STABILITY_API_KEY to .env for real AI generation."
        });
      }

      // 1. Prepare the prompt
      const prompt = `Transform this room image into a ${style} ${roomType} with ${surface} surfaces. Description: ${description}. Keep layout similar but enhance design, lighting, textures, and realism. Ultra-realistic, 8k, interior design photography.`;

      // 2. Fetch the uploaded image from Cloudinary
      console.log("Fetching image from Cloudinary:", req.file.path);
      const imageResponse = await axios.get(req.file.path, { responseType: 'arraybuffer' });
      const imageBuffer = Buffer.from(imageResponse.data);

      // Simple manual dimension detection for JPG/PNG to pick best SDXL size
      let width = 1024, height = 1024; // Default to square
      try {
        if (imageBuffer[0] === 0xFF && imageBuffer[1] === 0xD8) { // JPEG
          let offset = 2;
          while (offset < imageBuffer.length) {
            const marker = imageBuffer.readUInt16BE(offset);
            const length = imageBuffer.readUInt16BE(offset + 2);
            if (marker === 0xFFC0 || marker === 0xFFC2) {
              height = imageBuffer.readUInt16BE(offset + 5);
              width = imageBuffer.readUInt16BE(offset + 7);
              break;
            }
            offset += length + 2;
          }
        } else if (imageBuffer[0] === 0x89 && imageBuffer[1] === 0x50) { // PNG
          width = imageBuffer.readUInt32BE(16);
          height = imageBuffer.readUInt32BE(12 + 8);
        }
      } catch (e) { console.warn("Could not detect dimensions, using default square."); }

      // Choose best SDXL dimensions based on detected aspect ratio
      const isLandscape = width > height;
      const targetW = isLandscape ? 1344 : 768;
      const targetH = isLandscape ? 768 : 1344;
      
      console.log(`Detected: ${width}x${height}. Target: ${targetW}x${targetH}`);

      // Re-fetch with exact Cloudinary dimensions to avoid Stability AI dimension error
      const transformedUrl = req.file.path.replace("/upload/", `/upload/w_${targetW},h_${targetH},c_fill/`);
      const finalImageResponse = await axios.get(transformedUrl, { responseType: 'arraybuffer' });
      const finalImageBuffer = Buffer.from(finalImageResponse.data);

      // 3. Call Stability AI Image-to-Image API using FormData
      const formData = new FormData();
      formData.append("init_image", finalImageBuffer, {
        filename: "init_image.png",
        contentType: req.file.mimetype,
      });
      
      // Highly emphasized prompt to ensure furniture and style are applied
      const finalPrompt = `A professional interior design photo of a ${style} ${roomType}. ${description}. The floor is ${surface}. High-end furniture, realistic lighting, highly detailed, 8k resolution, cinematic lighting, wide angle view.`;
      
      formData.append("text_prompts[0][text]", finalPrompt);
      formData.append("text_prompts[0][weight]", 1);
      
      // Strong negative prompt to avoid empty rooms or poor quality
      const negativePrompt = "empty room, bare walls, low quality, blurry, distorted, messy, cluttered, dark, gloomy, monochrome, cropped, zoomed in";
      formData.append("text_prompts[1][text]", negativePrompt);
      formData.append("text_prompts[1][weight]", -1);
      
      formData.append("cfg_scale", 9); // Higher adherence to prompt (7-10 is good)
      formData.append("samples", 1);
      formData.append("steps", 40); 
      formData.append("init_image_mode", "IMAGE_STRENGTH");
      formData.append("image_strength", 0.32); // Lower strength allows more furniture to be added

      console.log(`Calling Stability AI API (SDXL 1.0) with ${targetW}x${targetH}...`);
      const response = await axios.post(
        "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/image-to-image",
        formData,
        {
          headers: {
            ...formData.getHeaders(),
            Accept: "application/json",
            Authorization: `Bearer ${STABILITY_API_KEY}`,
          },
          validateStatus: false,
        }
      );

      if (response.status !== 200) {
        throw new Error(`Stability AI Error (${response.status}): ${JSON.stringify(response.data)}`);
      }

      // 4. Process response and upload to Cloudinary
      if (!response.data.artifacts || response.data.artifacts.length === 0) {
        throw new Error("Stability AI returned no image artifacts.");
      }

      const generatedBase64 = response.data.artifacts[0].base64;
      console.log("Uploading generated image to Cloudinary...");
      const uploadRes = await cloudinary.uploader.upload(`data:image/png;base64,${generatedBase64}`, {
        folder: "flexicore/generated-rooms",
      });

      res.json({
        success: true,
        generatedImageUrl: uploadRes.secure_url,
      });

    } catch (error) {
      console.error("❌ AI Generation Error Details:", error.message);
      
      let clientMessage = "Failed to generate room image.";
      if (error.message.includes("Stability AI Error")) {
        clientMessage = error.message; // Pass through the specific API error
      } else if (error.code === 'ECONNREFUSED') {
        clientMessage = "Could not connect to AI service. Please check your internet.";
      }

      res.status(500).json({
        success: false,
        message: clientMessage,
        error: error.message
      });
    }
  });
});

module.exports = router;
