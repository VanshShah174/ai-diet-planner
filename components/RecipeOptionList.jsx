import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Colors from "../shared/Colors";
import Prompt from "../shared/Prompt";
import LoadingDialog from "./LoadingDialog";
import { GenerateAIRecipe, GenerateRecipeImage } from "../services/AiModel";
import GenerateAiRecipe from "../app/generate-ai-recipe";

const RecipeOptionList = ({ recipeOption }) => {
  const [loading, setLoading] = useState(false);

  const onRecipeOptionSelect = async (recipe) => {
    setLoading(true);
  
    const PROMPT =
      `RecipeName: ${recipe?.recipeName}\n` +
      `Description: ${recipe?.description}\n` +
      Prompt.GENERATE_COMPLETE_RECIPE_PROMPT;
  
    console.log("Generated Prompt:", PROMPT);
  
    try {
      const result = await GenerateAIRecipe(PROMPT);
      let extractJson = result.trim();
  
      const jsonBlockMatch = extractJson.match(/```json\s*([\s\S]*?)```/i);
      if (jsonBlockMatch) {
        extractJson = jsonBlockMatch[1].trim();
      }
  
      const jsonObjectMatch = extractJson.match(/{[\s\S]*}/);
      if (!jsonObjectMatch) {
        throw new Error("No valid JSON object found in AI response.");
      }
  
      const parsedJsonResponse = JSON.parse(jsonObjectMatch[0]);
      console.log("Parsed JSON Response:", parsedJsonResponse);
  
      // Generate Recipe Image

      const aiImageRes = await GenerateRecipeImage(parsedJsonResponse?.imagePrompt)
      console.log(aiImageRes?.data?.image)


      // Save to DB or Navigate here
    } catch (error) {
      console.log("Error in AI Model", error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <ScrollView
      style={{
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#000",
          marginBottom: 10,
        }}
      >
        Select Recipe
      </Text>

      <View>
        {recipeOption?.map((item, index) => (
          <TouchableOpacity
            onPress={() => onRecipeOptionSelect(item)}
            key={index}
            style={{
              padding: 15,
              borderWidth: 0.2,
              borderRadius: 10,
              marginTop: 15,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {item?.recipeName}
            </Text>
            <Text
              style={{
                color: Colors.GRAY,
              }}
            >
              {item?.description}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <LoadingDialog loading={loading} />
    </ScrollView>
  );
};

export default RecipeOptionList;
