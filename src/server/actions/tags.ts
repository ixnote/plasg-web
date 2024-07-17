"use server";

import axios from "axios";

export async function allTags() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/tag/types`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000, // Set a timeout of 10 seconds
      }
    );
    console.log("🚀 ~ allTags ~ response:", response.data.data);
    return response.data.data;
  } catch (error: any) {
    console.log("🚀 ~ allResources ~ error:", error.message);
    // throw new Error(error.message);
  }
}

export async function getTopicTags() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/tag/topics`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000, // Set a timeout of 10 seconds
      }
    );
    console.log("🚀 ~ getTopicTags ~ response:", response.data.data);
    return response.data.data;
  } catch (error: any) {
    console.log("🚀 ~ allResources ~ error:", error.message);
    // throw new Error(error.message);
  }
}
