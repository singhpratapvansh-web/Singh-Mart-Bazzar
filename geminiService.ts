
import { GoogleGenAI } from "@google/genai";

// Initialize the GoogleGenAI client with the API key from environment variables
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getShoppingAdvice = async (userMessage: string, context: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Context: You are a shopping assistant for Singh Mart Bazaar. The brand values are heritage, quality, and authenticity. 
      Product list context: ${context}
      User Query: ${userMessage}`,
      config: {
        systemInstruction: "You are a helpful, polite, and knowledgeable shopping assistant for Singh Mart Bazaar. Assist users with product questions, gift ideas, and site navigation.",
        temperature: 0.7,
      },
    });
    // Access the text property directly on the response object
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a little trouble connecting to my knowledge base. How can I help you today?";
  }
};
