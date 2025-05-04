import { View, Text, Platform, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Colors from "../../shared/Colors";
import Button from "../../components/shared/Button";
import { GenerateRecipeOptionsAiModel } from "../../services/AiModel";
import Prompt from "../../shared/Prompt";

const GenerateAiRecipe = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const[recipeOptions, setRecipeOptions] = useState();

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
    console.log("AI Response:", result);

    let extractJson = result;

    // If wrapped in markdown, extract content
    const jsonMatch = result.match(/```json\s*([\s\S]*?)```/i);
    if (jsonMatch) {
      extractJson = jsonMatch[1].trim();
    }

    const parsedJsonResponse = JSON.parse(extractJson);
    console.log("Parsed JSON Response:", parsedJsonResponse);

    setRecipeOptions(parsedJsonResponse);

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
