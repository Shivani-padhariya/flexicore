const axios = require("axios");
const FormData = require("form-data");
require("dotenv").config();

async function testStability() {
  const STABILITY_API_KEY = process.env.STABILITY_API_KEY;
  console.log("Using Key:", STABILITY_API_KEY ? "Present" : "Missing");
  
  const formData = new FormData();
  // Using a tiny placeholder pixel for testing
  const dummyBuffer = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==", "base64");
  
  formData.append("init_image", dummyBuffer, { filename: "test.png" });
  formData.append("text_prompts[0][text]", "a beautiful room");
  formData.append("text_prompts[0][weight]", 1);
  
  try {
    const response = await axios.post(
      "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/image-to-image",
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          Accept: "application/json",
          Authorization: `Bearer ${STABILITY_API_KEY}`,
        },
        validateStatus: false
      }
    );
    
    console.log("Status:", response.status);
    console.log("Data:", JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error("Error:", error.message);
  }
}

testStability();
