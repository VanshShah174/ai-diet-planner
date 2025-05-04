import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import Colors from "@/shared/Colors";

const Button = ({ title, onPress, loading = false , icon}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      style={{
        padding: 13,
        backgroundColor: Colors.PRIMARY,
        width: "100%",
        borderRadius: 10,
      }}
    >
      {loading ? (
        <ActivityIndicator size={20} color={Colors.WHITE} />
      ) : (
        <Text
          style={{
            color: Colors.WHITE,
            fontSize: 18,
            textAlign: "center",
          }}
        >
          {icon}
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
