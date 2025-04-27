import { Dimensions, Image, Text, View } from "react-native";
import Colors from "../shared/Colors";
import Button from "../components/shared/Button";
import { useRouter } from "expo-router";
import { useConvex } from "convex/react";
import { useContext, useEffect } from "react";
import { UserContext } from "@/context/UserContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/FirebaseConfig";

export default function Index() {
  const router = useRouter();

  const { user, setUser } = useContext(UserContext);
  const convex = useConvex();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userInfo) => {
      console.log(userInfo);
      const userData = await convex.query(api.Users.GetUser, {
        email: userInfo?.email,
      });
      console.log(userData);
      setUser(userData);
    });
    return () => unsubscribe();
  },[]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("./../assets/images/landing.png")}
        style={{
          width: "100%",
          height: Dimensions.get("screen").height,
        }}
      />
      <View
        style={{
          position: "absolute",
          height: Dimensions.get("screen").height,
          backgroundColor: "#0707075e",
          width: "100%",
          display: "flex",
          // justifyContent: 'center',
          alignItems: "center",
          padding: 20,
        }}
      >
        <Image
          style={{
            width: 150,
            height: 150,
            marginTop: 50,
          }}
          source={require("./../assets/images/logo.png")}
        />

        <Text
          style={{
            color: Colors.WHITE,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          AI Diet Planner
        </Text>
        <Text
          style={{
            color: Colors.WHITE,
            fontSize: 20,
            textAlign: "center",
            marginTop: 15,
            marginHorizontal: 20,
            opacity: 0.8,
          }}
        >
          Craft delicious, Healthy, meal plans tailored just for you. Achieve
          your goals with ease!
        </Text>
      </View>

      <View
        style={{
          position: "absolute",
          width: "100%",
          bottom: 25,
          padding: 20,
        }}
      >
        <Button
          title={"Get Started"}
          onPress={() => router.push("/auth/SignIn")}
        />
      </View>
    </View>
  );
}
