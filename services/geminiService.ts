import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
): Promise<string> => {
  // El API KEY se inyecta mediante el proceso de 'define' de Vite desde process.env.API_KEY
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    return "Nexus Core: API Key no detectada. Por favor, verifica tu configuración de entorno.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
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

    return response.text || "Comunicación establecida pero no se recibieron datos.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    if (error.message?.includes('429')) {
      return "Nexus Core: Límite de peticiones alcanzado. Espera un momento.";
    }
    return "Nexus Core Error: Fallo en la conexión con la red neuronal.";
  }
};
