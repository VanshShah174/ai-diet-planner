import { View, Text, Image, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import { Link } from "expo-router";

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSignIn = () => {
    if (!email || !password) {
      Alert.alert("Please fill all the fields");
      return;
    }
  };

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        padding: 25,
      }}
    >
      <Image
        source={require("./../../assets/images/logo.png")}
        style={{
          width: 150,
          height: 150,
          marginTop: 50,
        }}
      />

      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        Welcome Back
      </Text>

      <View
        style={{
          width: "100%",
          marginTop: 20,
        }}
      >
        <Input placeholder={"Email"} onChangeText={setEmail} />
        <Input placeholder={"Password"} password={true} onChangeText={setPassword} />
      </View>
      <View
        style={{
          width: "100%",
          marginTop: 15,
        }}
      >
        {/* <Button title={"Forgot Password?"}/> */}
        <Button title={"Sign In"} onPress={() => onSignIn()} />

        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            marginTop: 15,
          }}
        >
          Don't have an account?
        </Text>
        <Link href={"/auth/SignUp"}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 5,
            }}
          >
            Create New Account
          </Text>
        </Link>
      </View>
    </View>
  );
};

export default SignIn;
