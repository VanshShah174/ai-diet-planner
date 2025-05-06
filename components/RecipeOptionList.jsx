import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../shared/Colors'
import Prompt from '../shared/Prompt'

const RecipeOptionList = ({recipeOption}) => {

    const onRecipeOptionSelect =(recipe) => {
        const PROMPT = "RecipeName: " + recipe?.recipeName + "Description:" + recipe?.description + Prompt.GENERATE_COMPLETE_RECIPE_PROMPT;
        console.log("Generated Prompt:", PROMPT);
    }


  return (
    <ScrollView style ={{
        marginTop: 20
    }}>
      <Text style={{
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 10,
      }}>Select Recipe</Text>

        <View>
            {recipeOption?.map((item,index)=>(
                <TouchableOpacity
                onPress={() => onRecipeOptionSelect(item)}
                key={index} style={{
                    padding: 15,
                    borderWidth: 0.2,
                    borderRadius: 10,
                    marginTop: 15,
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: "bold",
                    }}>{item?.recipeName}</Text>
                    <Text style=
                    {{
                        color : Colors.GRAY,
                    }}>
                        {item?.description}
                    </Text>

                    </TouchableOpacity>
            ))}
        </View>

    </ScrollView>
  )
}

export default RecipeOptionList