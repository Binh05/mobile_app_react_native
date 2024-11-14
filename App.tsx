import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./src/screens/SignUp";
import SignIn from "./src/screens/SignIn";
import Home from "./src/screens/Home";
import { ReduxProvider } from "./src/libs/provider";
import "./global.css";
import { verifyInstallation } from "nativewind";
import { DefaultTheme, PaperProvider, Avatar } from "react-native-paper";
import Start from "./src/screens/start";
import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import ProfileScreen from "./src/screens/ProfileScreen";
import HomeScreen from "./src/screens/HomeScreen";
import Statistical from "./src/screens/StatisticalScreen";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import { ScrollView } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};
export default function App() {
  verifyInstallation();

  return (
    <ReduxProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={"Maintabs"}>
            <Stack.Screen
              name="start"
              component={Start}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Maintabs"
              component={MainTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="signIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="signUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="home"
              component={Home}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          height: 100,
        },
        headerStyle: {
          backgroundColor: "#f0f0f0",
        },
        tabBarBackground: () => (
          <BlurView
            tint="light"
            intensity={900}
            style={StyleSheet.absoluteFill}
          />
        ),
        tabBarShowLabel: false,
        headerLeft: () => (
          <TouchableOpacity style={{ marginLeft: 30, marginTop: 30 }}>
            <Avatar.Image size={50} source={require("./src/Image/avata.jpg")} />
          </TouchableOpacity>
        ),
        headerTitle: "",
      }}
    >
      <Tab.Screen
        name="home"
        options={{
          tabBarIcon: () => <Image source={require("./src/Icon/home.png")} />,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="statistical"
        options={{
          tabBarIcon: () => (
            <Image source={require("./src/Icon/statistical.png")} />
          ),
        }}
        component={Statistical}
      />
      <Tab.Screen
        name="scan"
        options={{
          tabBarIcon: () => (
            <View>
              <Image source={require("./src/Icon/scan.png")} />
            </View>
          ),
        }}
        component={ProfileScreen}
      />
      <Tab.Screen
        name="notepad"
        options={{
          tabBarIcon: () => (
            <Image source={require("./src/Icon/notepad.png")} />
          ),
        }}
        component={ProfileScreen}
      />
      <Tab.Screen
        name="profile"
        options={{
          tabBarIcon: () => (
            <Image source={require("./src/Icon/setting.png")} />
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
