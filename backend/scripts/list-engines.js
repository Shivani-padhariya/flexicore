const axios = require("axios");
require("dotenv").config();

async function listEngines() {
  const STABILITY_API_KEY = process.env.STABILITY_API_KEY;
  try {
    const response = await axios.get(
      "https://api.stability.ai/v1/engines/list",
      {
        headers: {
          Authorization: `Bearer ${STABILITY_API_KEY}`,
        },
      }
    );
    console.log("Available Engines:", JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error("Error listing engines:", error.response?.data || error.message);
  }
}

listEngines();
