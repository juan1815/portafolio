import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

// The API key must be obtained from the environment variable process.env.API_KEY.
const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({ apiKey });
};

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
): Promise<string> => {
  const ai = getAiClient();
  
  if (!ai) {
    return "Viernes Core: API Key not detected in system environment. Please check your configuration.";
  }

  try {
    // We use gemini-3-flash-preview as it's highly efficient and usually part of the free tier/trial.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text || "Communication established but no data returned.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    if (error.message?.includes('429')) {
      return "Viernes Core: Rate limit exceeded (Free Tier). Please wait a moment before sending more data.";
    }
    return "Viernes Core Error: Connection to the neural network failed. Please verify API status.";
  }
};