import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Onboarding from "~screens/onboarding";
import GetStartedScreen from "~screens/onboarding/GetStartedScreen";
import LoginScreen from "~screens/onboarding/Auth/LoginScreen";
import SignupScreen from "~screens/onboarding/Auth/SignupScreen";
import ForgotPasswordScreen from "~screens/onboarding/Auth/ForgotPasswordScreen";
import VerifyEmailScreen from "~screens/onboarding/Auth/VerifyEmailScreen";
import SetPasswordScreen from "~screens/onboarding/Auth/SetPasswordScreen";
import AboutBirdBrainScreen from "~screens/onboarding/AboutBirdBrain";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Intro" component={Onboarding} />
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} />
      <Stack.Screen name="SetPassword" component={SetPasswordScreen} />
      <Stack.Screen name="AboutBirdBrain" component={AboutBirdBrainScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
