import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client
// Note: The API key must be provided in the environment variable API_KEY
// If no key is found, we will fall back to hardcoded messages gracefully.
const apiKey = process.env.API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const FALLBACK_MESSAGES = [
  "I can't find the perfect words, but I know I love you.",
  "Words fail me, but my heart doesn't. I miss us.",
  "I'm ready to listen, to change, and to love you better.",
  "Error 404: Ego not found. Only love remains."
];

export const generateRomanticApology = async (): Promise<string> => {
  if (!ai) {
    console.warn("No API Key found, using fallback.");
    return "I don't need AI to tell you that I messed up and I miss you like crazy.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `
        Write a short, sweet, and sincere paragraph (max 80 words) apologizing for a fight and asking for a second chance.
        The tone should be romantic but slightly playful. 
        Focus on "growing stronger together" and "fixing mistakes".
        Do not sound too formal. Sound like a person in love trying to fix things.
      `,
    });
    return response.text || FALLBACK_MESSAGES[0];
  } catch (error: any) {
    console.error("Error generating text:", error);
    // Check for Rate Limit (429) or Quota issues
    if (error.toString().includes('429') || error.toString().includes('Quota')) {
       return "I have so much love for you that I broke the AI. (Rate Limit Hit: But my love is unlimited).";
    }
    return FALLBACK_MESSAGES[Math.floor(Math.random() * FALLBACK_MESSAGES.length)];
  }
};

export const generateLovePoem = async (memoriesContext: string): Promise<string> => {
  if (!ai) return "Roses are red, I made a mistake, let's fix this, for our love's sake.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `
        Write a very short, 4-line poem about reconciliation and love.
        Context: ${memoriesContext}.
        Make it rhyme and feel personal.
      `,
    });
    return response.text || "Our story isn't over yet.";
  } catch (error) {
    console.error("Error generating poem:", error);
    return "Roses are red, violets are blue, I'm sorry I fought, I just want you.";
  }
};