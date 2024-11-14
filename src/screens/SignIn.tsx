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
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import CustomButton from "../component/customButton";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import TextTouch from "../component/textTouch";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import CustomCheckbox from "../component/checkbox";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { TextInput } from "react-native-paper";
import { setUser, clearUser } from "../slices/userSlice/userSlice";
import { RootState } from "../store/store";

const SignIn = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const user = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch()
  const [userinfo, setUserInfo] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [remember, setRemember] = useState(false);
  const handleOnSubmit = () => {
    dispatch(setUser({ name: userinfo, email: `${password}` }));
    if (!user || !user.name || !user.email) {
      alert("Nhập đầy đủ tài khoản hoặc mật khẩu");
    }else {
      navigation.navigate("Maintabs");
      dispatch(clearUser());
    }

  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  if (!emailRegex.test(userinfo)) {
    
  }

  if (password.length < 6) {
    
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "android" ? -100 : 0}
      >
        <View style={styles.container}>
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
          <View style={{ position: "absolute", left: 0, bottom: 0 }}>
            <Image style={{position: 'absolute', bottom: 0}} source={require("../Icon/BottomBack.png")} />
            <Image
              style={{ position: "absolute", bottom: 0 }}
              source={require("../Icon/BottomBackSmall.png")}
            />
          </View>
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
              
              <TextInput
                style={styles.textInput}
                mode="outlined"
                label="Email"
                placeholder="Enter your email"
                left={<TextInput.Icon icon="account-circle"/>}
                onChangeText={setUserInfo}
              />
            </View>

            <View style={styles.inputSection}>
              
              <TextInput
                style={styles.textInput}
                mode="outlined"
                label="Password"
                placeholder="******"
                left={<TextInput.Icon icon="lock"/>}
                right={<TextInput.Icon icon={!isPasswordVisible ? "eye" : "eye-off"} onPress={() => setIsPasswordVisible(!isPasswordVisible)}/>}
                secureTextEntry={!isPasswordVisible}
                onChangeText={setPassword}
              />
              
            </View>

            <CustomButton title="Sign In" onPress={handleOnSubmit} />
          </View>

          <View style={styles.functionContainer}>
            <View style={styles.checkboxContainer}>
              <CustomCheckbox onPress={() => setRemember(!remember)} checked={remember}/>
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
    width: "100%",
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