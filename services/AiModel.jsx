// services/AiModel.jsx

export const CalculateCaloriesAI = async (PROMPT) => {
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.EXPO_PUBLIC_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.0-flash-exp:free",
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
  