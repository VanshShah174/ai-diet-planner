export default {
  CALORIES_PROMPT: `Based on Weight,Height,Gender,Goal,
    give me calories and proteins need daily Consider
    Age as 28 in JSON format and follow the schema:
    {
    calories: <>,
    proteins: <>,
    }
    
    `,

  GENERATE_RECIPE_OPTIONS_PROMPT: `You are a recipe generator. Based on the user's request, return exactly 3 recipes as an array of JSON objects.

Each object must contain:
- "recipeName": the name with an emoji
- "description": a 2-line summary
- "ingredients": a list of ingredient names (no measurements)

Guidelines:
- Use the user's input to guide the theme of all 3 recipes.
- If the user includes "veg" or "vegetarian", exclude all meat, seafood, and eggs.
- Do NOT wrap the response in backticks or markdown formatting.
- Do NOT include plain strings — return an array of JSON objects only.
- Output only the JSON. No intro, no explanation.`,

GENERATE_COMPLETE_RECIPE_PROMPT : `
Using the given recipeName and description, generate a complete recipe object with the following fields:

- Add emoji icons for each ingredient as "icon".
- Provide quantity for each ingredient in a user-friendly format (e.g., "1 cup", "2 tsp").
- Return total calories as a number under "calories".
- Return estimated cooking time in minutes as "cookTime".
- Return a realistic image description prompt based on the recipe in "imagePrompt".
- Include a list of categories for the recipe from: ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert", "Vegan", "Vegetarian", "Non-Vegetarian"].
- Return number of people the recipe serves in "serveTo".
- Provide clear, step-by-step cooking instructions in a string array as "steps".

🔸 Respond only in raw JSON format (no markdown, no explanation).

🧾 The JSON schema should strictly follow this structure:

{
  "description": "string",
  "recipeName": "string",
  "calories": number,
  "category": ["string"],
  "cookTime": number,
  "imagePrompt": "string",
  "ingredients": [
    {
      "icon": "string",
      "ingredient": "string",
      "quantity": "string"
    }
  ],
  "serveTo": number,
  "steps": ["string"]
}
`

};
