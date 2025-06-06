import { View, Text, Image, Pressable, Alert } from "react-native";
import React, { useContext, useState } from "react";
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import { Link } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/FirebaseConfig";
import { api } from "../../convex/_generated/api";
import { useMutation } from "convex/react";
import { UserContext } from "../../context/UserContext";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const createNewUser = useMutation(api.Users.CreateNewUser);
    const { user, setUser } = useContext(UserContext);

  const onSignUp = () => {
    if (!name || !email || !password) {
      Alert.alert("Please fill all the fields");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Signed in
            const user = userCredential.user;
          console.log(user);
          if (user) {
            const result = await createNewUser({
              email: email,
              name: name,
            });
            console.log(result);
            setUser(result);
          }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Alert.alert(errorMessage);
            console.log(errorCode, errorMessage);
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
        Create New Account
      </Text>

      <View
        style={{
          width: "100%",
          marginTop: 20,
        }}
      >
        <Input placeholder={"Full Name"} onChangeText={setName} />
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
        <Button title={"Create Account"} onPress={() => onSignUp()} />

        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            marginTop: 15,
          }}
        >
          Already have an Account?
        </Text>
        <Link href={"/auth/SignIn"}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 5,
            }}
          >
            Sign In Here
          </Text>
        </Link>
      </View>
    </View>
  );
};

export default SignUp;
