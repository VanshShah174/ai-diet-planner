import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useContext, useState } from "react";
import Colors from "./../../shared/Colors";
import Input from "../../components/shared/Input";
import {
  Dumbbell01FreeIcons,
  FemaleSymbolIcon,
  MaleSymbolIcon,
  PlusSignSquareIcon,
  WeightScaleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import Button from "../../components/shared/Button";
import { api } from "./../../convex/_generated/api";
import { UserContext } from "./../../context/UserContext";
import { useRouter } from "expo-router";
import { useMutation } from "convex/react";

const Preference = () => {
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [goal, setGoal] = useState("");
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  const UpdateUserPref = useMutation(api.Users.UpdateUserPref);

  const onContinue = async () => {
    if (!weight || !height || !gender) {
      Alert.alert("Please fill all the fields");
      return;
    }

    const data = {
      uid: user?._id,
      height: height,
      weight: weight,
      gender: gender,
      goal: goal,
    };

    const result = await UpdateUserPref({
      ...data,
    });
    setUser((prev) => ({
      ...prev,
      ...data,
    }));

    router.replace('/(tabs)/Home');
  };
  return (
    <SafeAreaView
      style={{
        padding: 20,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 25,
          fontWeight: "bold",
          marginTop: 15,
        }}
      >
        Tell us about yourself
      </Text>

      <Text
        style={{
          textAlign: "center",
          fontSize: 15,
          marginTop: 10,
          color: Colors.GRAY,
        }}
      >
        This help us create your personlized meal plan and workout plan.
      </Text>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Input
            placeholder={"e.g. 70 KG"}
            label="weight (kg)"
            onChangeText={setWeight}
          />
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <Input
            placeholder={"e.g. 5.10"}
            label="Height (ft)"
            onChangeText={setHeight}
          />
        </View>
      </View>

      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Gender
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            // marginTop: 10,
            // justifyContent: 'space-between'
          }}
        >
          <TouchableOpacity
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: gender == "Male" ? Colors.PRIMARY : Colors.GRAY,
              borderRadius: 10,
              flex: 1,
              alignItems: "center",
            }}
            onPress={() => setGender("Male")}
          >
            <HugeiconsIcon
              icon={MaleSymbolIcon}
              size={50}
              color={Colors.BLUE}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: gender == "Female" ? Colors.PRIMARY : Colors.GRAY,
              borderRadius: 10,
              flex: 1,
              alignItems: "center",
            }}
            onPress={() => setGender("Female")}
          >
            <HugeiconsIcon
              icon={FemaleSymbolIcon}
              size={50}
              color={Colors.PINK}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "medium",
          }}
        >
          What's your goal?
        </Text>
        <TouchableOpacity
          onPress={() => setGoal("Weight Loss")}
          style={[
            styles.goalContainer,
            {
              borderColor: goal == "Weight Loss" ? Colors.PRIMARY : Colors.GRAY,
            },
          ]}
        >
          <HugeiconsIcon icon={WeightScaleIcon} />
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Weight Loss
            </Text>
            <Text
              style={{
                color: Colors.GRAY,
              }}
            >
              Reduce body fat & get leaner
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setGoal("Muscle Gain")}
          style={[
            styles.goalContainer,
            {
              borderColor: goal == "Muscle Gain" ? Colors.PRIMARY : Colors.GRAY,
            },
          ]}
        >
          <HugeiconsIcon icon={Dumbbell01FreeIcons} />
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Muscle Gain
            </Text>
            <Text
              style={{
                color: Colors.GRAY,
              }}
            >
              Build Muscle & get stronger
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setGoal("Weight Gain")}
          style={[
            styles.goalContainer,
            {
              borderColor: goal == "Weight Gain" ? Colors.PRIMARY : Colors.GRAY,
            },
          ]}
        >
          <HugeiconsIcon icon={PlusSignSquareIcon} />
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Weight Gain
            </Text>
            <Text
              style={{
                color: Colors.GRAY,
              }}
            >
              Increase healthy body mass
            </Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            marginTop: 20,
          }}
        >
          <Button title={"Continue"} onPress={onContinue} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  goalContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 15,
    marginTop: 10,
  },
});

export default Preference;
