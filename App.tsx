import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import { useAppTheme } from "./src/libs/theme";
import SignIn from "./src/screens/Signin/SignIn";
import SignUp from "./src/screens/Signin/SignUp";
import HomeTabs from "./src/component/Layout/Navigation"
import Start from "./src/screens/Signin/Welcome";
import { ReduxProvider } from "./src/libs/provider";
import { useFonts } from "expo-font";
import {
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";
import { useAppSelector } from "./src/hooks/hook";
import { AppRegistry } from "react-native";
import OnboardingFlow from "./src/screens/OnboardingFlow";

const Stack = createNativeStackNavigator();


const AppContent = () => {
  const theme = useAppTheme();
  const user = useAppSelector((state) => state.user);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* Conditional navigation based on user authentication and status */}
          {user?.token ? (
            !user.status ? (
              // If user exists and status is true, show Quiz screens
              <Stack.Screen name="QuizStack" component={OnboardingFlow} />
            ) : (
              // If user exists and status is false, show HomeTabs
              <Stack.Screen name="HomeTabs" component={HomeTabs} />
            )
          ) : (
            <>
              <Stack.Screen name="start" component={Start} />
              <Stack.Screen name="signIn" component={SignIn} />
              <Stack.Screen name="signUp" component={SignUp} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

const App = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ReduxProvider>
      <AppContent />
    </ReduxProvider>
  );
};

export default App;
AppRegistry.registerComponent('main', () => App);
