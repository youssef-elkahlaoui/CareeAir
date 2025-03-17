"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function generateChatResponse(message) {
  if (!message.trim()) {
    throw new Error("Message is required");
  }

  const contextPrompt = `You are an AI assistant for CareerAir, a comprehensive career development platform. Here's what you need to know:

  Key Features:
  1. AI-powered Resume Builder: Helps users create and optimize professional resumes
  2. Cover Letter Generator: Creates tailored cover letters based on job descriptions
  3. Interview Preparation System: Provides industry-specific technical interview questions
  4. Industry Insights: Offers real-time data on salary ranges, market trends, and in-demand skills

  Security: We use Clerk for authentication and protect all user data
  Data Updates: Industry insights are updated weekly
  Customization: Users can edit all AI-generated content

  User Question: ${message}

  Provide a helpful, professional response focused on CareerAir's features and career development. If asked about technical details, explain them clearly but maintain focus on how they benefit the user's career journey.`;

  try {
    const result = await model.generateContent(contextPrompt);
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error("Chat generation error:", error);
    throw new Error("Failed to generate chat response");
  }
}