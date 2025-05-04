// services/AiModel.jsx

const AIMODELNAME ="qwen/qwen-2.5-7b-instruct:free";

export const CalculateCaloriesAI = async (PROMPT) => {
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.EXPO_PUBLIC_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: AIMODELNAME,
          messages: [
            {
              role: "user",
              content: PROMPT,
            },
          ],
        }),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        console.error("OpenRouter API error:", result);
        throw new Error(result?.error?.message || "API request failed");
      }
  
      return result?.choices?.[0]?.message?.content || "";
    } catch (error) {
      console.error("Failed to fetch calories from AI:", error.message);
      return "Sorry, I couldn't calculate your calories right now.";
    }
  };
  
  export const GenerateRecipeOptionsAiModel = async (PROMPT) => {
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.EXPO_PUBLIC_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: AIMODELNAME,
          messages: [
            {
              role: "user",
              content: PROMPT,
            },
          ],
        }),
      });
  
      const result = await response.json();
  
      console.log("Raw API response:", result); // 👈 Add this
  
      if (!response.ok) {
        console.error("OpenRouter API error:", result);
        throw new Error(result?.error?.message || "API request failed");
      }
  
      const content = result?.choices?.[0]?.message?.content;
      if (!content) {
        throw new Error("No content returned from AI");
      }
  
      return content;
    } catch (error) {
      console.error("Failed to fetch recipe from AI:", error.message); // 🔍 clearer error message
      return "Sorry, I couldn't fetch the recipe right now.";
    }
  };
  