"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function generateChatResponse(message) {
  if (!message.trim()) {
    throw new Error("Message is required");
  }

  try {
    const result = await model.generateContent(message);
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error("Chat generation error:", error);
    throw new Error("Failed to generate chat response");
  }
}