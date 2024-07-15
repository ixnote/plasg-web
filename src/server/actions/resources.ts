"use server";

import axios from "axios";

export async function allResources() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/resource/all`,
      //   `${process.env.NEXT_PUBLIC_BASE_URL}/tag/types`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000, // Set a timeout of 10 seconds
      }
    );

    console.log("🚀 ~ allResources ~ response:", response.data);
    return response.data;
  } catch (error: any) {
    console.log("🚀 ~ allResources ~ error:", error.message);
    throw new Error(error.message);
  }
}
