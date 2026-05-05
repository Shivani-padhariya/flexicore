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

      // 2. Call Stability AI Image-to-Image API
      // Note: This is a conceptual implementation of Stability AI SDK/API call
      // You might need to adjust based on their latest API version (e.g. SDXL)
      
      const response = await axios.post(
        "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/image-to-image",
        {
          text_prompts: [
            { text: prompt, weight: 1 },
            { text: "blurry, distorted, low quality, bad anatomy", weight: -1 }
          ],
          cfg_scale: 7,
          clip_guidance_preset: "FAST_BLUE",
          height: 1024,
          width: 1024,
          samples: 1,
          steps: 30,
          init_image: req.file.path // Some APIs allow URL, some require buffer
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${STABILITY_API_KEY}`,
          },
        }
      );

      // 3. Process response and upload to Cloudinary
      // (Stability AI returns base64 or binary)
      const generatedBase64 = response.data.artifacts[0].base64;
      const uploadRes = await cloudinary.uploader.upload(`data:image/png;base64,${generatedBase64}`, {
        folder: "flexicore/generated-rooms",
      });

      res.json({
        success: true,
        generatedImageUrl: uploadRes.secure_url,
      });

    } catch (error) {
      console.error("❌ AI Generation Error:", error.response?.data || error.message);
      res.status(500).json({
        success: false,
        message: "Failed to generate room image. Please check API keys and configuration.",
        error: error.message
      });
    }
  });
});

module.exports = router;
