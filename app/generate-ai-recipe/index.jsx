import { View, Text, Platform, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Colors from "../../shared/Colors";
import Button from "../../components/shared/Button";
import { GenerateRecipeOptionsAiModel } from "../../services/AiModel";
import Prompt from "../../shared/Prompt";
import RecipeOptionList from "../../components/RecipeOptionList";

const GenerateAiRecipe = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const[recipeOption, setRecipeOption] = useState([]);

  const GenerateRecipeOptions = async () => {
    setLoading(true);
    try {
      if (!input || typeof input !== "string" || input.trim().length === 0) {
        alert("Please enter a recipe idea.");
        setLoading(false);
        return;
      }
  
      const PROMPT = `User wants: "${input}". ${Prompt.GENERATE_RECIPE_OPTIONS_PROMPT}`;
      console.log("Generated Prompt:", PROMPT);
  
      const result = await GenerateRecipeOptionsAiModel(PROMPT);
      console.log("Raw AI Response:", result);
  
      let extractJson = result.trim();
  
      // 1. If markdown-wrapped, extract JSON block
      const jsonBlockMatch = extractJson.match(/```json\s*([\s\S]*?)```/i);
      if (jsonBlockMatch) {
        extractJson = jsonBlockMatch[1].trim();
      }
  
      // 2. If response has extra notes after JSON, isolate array
      const jsonArrayMatch = extractJson.match(/\[\s*{[\s\S]*}\s*\]/);
      if (!jsonArrayMatch) {
        throw new Error("No valid JSON array found in AI response.");
      }
  
      const parsedJsonResponse = JSON.parse(jsonArrayMatch[0]);
      console.log("Parsed JSON Response:", parsedJsonResponse);
  
      setRecipeOption(parsedJsonResponse);
    } catch (e) {
      console.log("Error in AI Model", e);
    } finally {
      setLoading(false);
    }
  };
  
  
  

  return (
    <View
      style={{
        padding: Platform.OS == "ios" ? 50 : 20,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          // color: "#000",
          // marginBottom: 10,
        }}
      >
        AI Recipe Generator
      </Text>
      <Text
        style={{
          marginTop: 10,
          color: Colors.BLUE,
          fontSize: 15,
        }}
      >
        Create Personalized style recipes using AI{" "}
      </Text>
      <TextInput
        onChangeText={(value) => setInput(value)}
        style={styles.textArea}
        placeholder="Enter Recipe Name"
      />
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Button title={"Generate Recipe"} onPress={GenerateRecipeOptions}  loading={loading}/>
      </View>

         { recipeOption.length > 0  &&  <RecipeOptionList recipeOption={recipeOption} />}
    </View>
  );
};

export default GenerateAiRecipe;

const styles = StyleSheet.create({
  textArea: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    height: 150,
    textAlignVertical: "top",
    backgroundColor: Colors.WHITE,
  },
});
