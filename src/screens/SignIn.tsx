import React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import CustomButton from "../component/customButton";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import CheckBox from "../component/checkbox";
import TextTouch from "../component/textTouch";

const SignIn = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "android" ? -100 : 0}
      >
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <View style={styles.titleContainer}>
              <Text
                style={{ fontSize: 25, color: "#62C998", fontWeight: "bold" }}
              >
                Welcome back
              </Text>
              <Text style={{ fontSize: 20 }}>Login to your account</Text>
            </View>

            <View style={styles.inputSection}>
              <FontAwesome
                style={styles.icon}
                name="user-circle-o"
                size={20}
                color="black"
              />
              <TextInput
                style={styles.textInput}
                placeholder="Enter your email"
                onChangeText={setUser}
              />
            </View>

            <View style={styles.inputSection}>
              <Fontisto
                style={[styles.icon, { marginLeft: 17, marginRight: 17 }]}
                name="locked"
                size={20}
                color="black"
              />
              <TextInput
                style={styles.textInput}
                placeholder="******"
                secureTextEntry={!isPasswordVisible}
                onChangeText={setPassword}
              />
              <Pressable
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                <FontAwesome5
                  style={styles.icon}
                  name={isPasswordVisible ? "eye-slash" : "eye"}
                  size={20}
                  color="black"
                />
              </Pressable>
            </View>

            <CustomButton onPress={() => alert("pressed")} title={"Login"} />
          </View>

          <View style={styles.functionContainer}>
            <View style={styles.checkboxContainer}>
              <CheckBox />
              <Text>Remember me</Text>
            </View>
            <Text>Forget password ?</Text>
          </View>
        </View>

        <View style={styles.titleBottom}>
          <Text style={{}}>Don't have account ?</Text>
          <TextTouch
            title=" Sign up"
            onPress={() => navigation.navigate("signUp")}
            TextStyle={{ color: "#62C998" }}
          />
        </View>

        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  titleContainer: {
    width: 300,
    marginBottom: 13,
  },

  inputContainer: {
    marginTop: 208,
  },

  icon: {
    margin: 7,
    marginLeft: 15,
    marginRight: 15,
  },

  inputSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    width: 300,
    height: 45,
    marginBottom: 7,
    marginTop: 7,
  },

  textInput: {
    flex: 1,
  },

  functionContainer: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  titleBottom: {
    position: "absolute",
    bottom: 30,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default SignIn;
