import { View, Text, Image, Pressable, Alert } from "react-native";
import React, { useContext, useState } from "react";
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import { Link } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/FirebaseConfig";
import { useConvex } from "convex/react";
import { api } from "../../convex/_generated/api";
import { UserContext } from "../../context/UserContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const convex = useConvex();
  const { user, setUser } = useContext(UserContext);

  const onSignIn = () => {
    if (!email || !password) {
      Alert.alert("Please fill all the fields");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        const userData = await convex.query(api.Users.GetUser, {
          email: email,
        });
        console.log(userData);
        setUser(userData);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        Alert.alert(
          "Incorrect email or password",
          "Please enter correct email and password"
        );
      });
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
        <Input
          placeholder={"Password"}
          password={true}
          onChangeText={setPassword}
        />
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
