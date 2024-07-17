"use server";

import axios from "axios";

export async function allResources() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/resource/all?page=1&pageSize=10`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000, // Set a timeout of 10 seconds
      }
    );

    // console.log("🚀 ~ allResources ~ response: ", response.data.data);
    return response.data.data;
  } catch (error: any) {
    console.log("🚀 ~ allResources ~ error:", error.message);
    // throw new Error(error.message);
  }
}

export async function getResourceByType({ id }: any) {
  // Resource, Document, Service
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/resource/all?page=1&pageSize=10&main_type_tag=${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000,
      }
    );

    // console.log("🚀 ~ allResources ~ response: ", response.data.data);
    return response.data.data;
  } catch (error: any) {
    console.log("🚀 ~ allResources ~ error:", error.message);
    // throw new Error(error.message);
  }
}
