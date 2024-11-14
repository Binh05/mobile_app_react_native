import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Pressable,
  Image,
} from "react-native";
import { TextInput } from "react-native-paper";
import CustomButton from "../component/customButton";
import { useState } from "react";
import TextTouch from "../component/textTouch";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const SignUp = () => {

  const navigation: NavigationProp<RootStackParamList> = useNavigation();


  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleOnSubmit = () => {
    alert(user);
  };

  const specicalCharRegex = /[^a-zA-Z0-9]/
  if (specicalCharRegex.test(password)) {
    alert("Mat khau khong duoc co ky tu dac biet")
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "android" ? -100 : 0} // Thêm `keyboardVerticalOffset` cho Android
      >
        <View style={styles.innerContainer}>
        <View style={{ position: "absolute", right: 0, top: -50 }}>
            <Image
              style={{ right: -20 }}
              source={require("../Icon/TopBack.png")}
            />
            <Image
              style={{ position: "absolute", right: 0, top: 120 }}
              source={require("../Icon/TopBackSmall.png")}
            />
          </View>
          <View style={{ position: "absolute", left: -30, bottom: -30 }}>
            <Image style={{position: 'absolute', bottom: 0}} source={require("../Icon/BottomBack.png")} />
            <Image
              style={{ position: "absolute", bottom: 0 }}
              source={require("../Icon/BottomBackSmall.png")}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.titleContainer}>
              <Text
                style={{ fontSize: 25, fontWeight: "bold", color: "#62C998" }}
              >
                Register
              </Text>
              <Text style={{ fontSize: 20 }}>Create your own account</Text>
            </View>

            <View style={styles.inputSection}>
              
              <TextInput
                style={styles.textInput}
                mode="outlined"
                label="Email"
                placeholder="Enter your email"
                left={<TextInput.Icon icon="account-circle"/>}
              />
            </View>

            <View style={styles.inputSection}>
              
              <TextInput
                style={styles.textInput}
                mode="outlined"
                label="Password"
                placeholder="******"
                left={<TextInput.Icon icon="lock"/>}
                right={<TextInput.Icon icon={isPasswordVisible ? "eye-off" : "eye"} onPress={() => setIsPasswordVisible(!isPasswordVisible)}/>}
                secureTextEntry={!isPasswordVisible}
                onChangeText={setPassword}
              />
              
            </View>

            
            <CustomButton onPress={handleOnSubmit} title={"Sign up"} />
          </View>
        </View>

        {/* Giữ nội dung này cố định ở dưới */}
        <View style={styles.titleBottom}>
          <Text style={{ color: "#000" }}>Have an account already?</Text>
          <TextTouch
            title=" Login"
            onPress={() => navigation.navigate("signIn")}
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
  },

  innerContainer: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 70,
  },

  titleContainer: {
    width: 300,
    marginBottom: 13,
  },

  inputContainer: {
    alignItems: "center",
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
    borderRadius: 5,
    width: 300,
    height: 45,
    marginBottom: 7,
    marginTop: 7,
  },

  textInput: {
    flex: 1,
  },

  titleBottom: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    flexDirection: "row",
  },
});

export default SignUp;
