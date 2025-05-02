import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../shared/Colors";
import Button from "./shared/Button";
import {
  ArrowRight02Icon,
  HugeiconsFreeIcons,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";

const GenerateRecipeCard = () => {
  return (
    <LinearGradient
      colors={[Colors.BLUE, Colors.PRIMARY]}
      style={{
        marginTop: 15,
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 10,
        // borderWidth: 1,
        // borderRadius: 20,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: Colors.WHITE,
        }}
      >
        Need Meal Ideas?? ✨
      </Text>
      <Text
        style={{
          fontSize: 15,
          color: Colors.WHITE,
          opacity: 0.8,
          marginTop: 5,
        }}
      >
        Let Our AI generate personalized Recipes For You!
      </Text>
      <TouchableOpacity
        style={{
          marginTop: 10,
          padding: 15,
            width: 190,
          backgroundColor: Colors.WHITE,
          borderRadius: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 7,
        }}
      >
        <Text
          style={{
            color: Colors.PRIMARY,
            fontSize: 15,
            textAlign: "center",
          }}
        >
          Generate with AI
        </Text>
        <HugeiconsIcon color={Colors.PRIMARY} icon={ArrowRight02Icon} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default GenerateRecipeCard;
