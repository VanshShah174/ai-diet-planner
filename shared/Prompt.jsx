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
};
