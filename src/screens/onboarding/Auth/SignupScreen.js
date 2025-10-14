import React, {useState} from "react";
import {View, StyleSheet, Image} from "react-native";
import PropTypes from "prop-types";
import Header from "../../../components/Header";
import {Button, ScrollView, Text, TextInput} from "../../../components/Common";
import {Images} from "../../../assets";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import {Checkbox} from "react-native-paper";

const SignupScreen = ({onLogin, onBack, navigation}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={styles.container}>
      <Header variant="auth" showBack onBack={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.header}>
            <Image source={Images.BirdBrainLogo} resizeMode="contain" />
            <Text variant="title" style={{fontWeight: "400"}}>
              Sign Up
            </Text>
          </View>
          <Text
            variant="small"
            style={{color: "#1B1A1F", marginVertical: 10}}
            align="left">
            Unleash your pet's health with an AI analyzer
          </Text>

          <View style={styles.form}>
            <TextInput
              label="Full Name"
              value={fullName}
              onChangeText={setFullName}
              placeholder="Enter your full name"
            />
            <TextInput
              label="Email Address"
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
            />
            <TextInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              secureTextEntry
            />
          </View>

          <Button
            title="Sign Up"
            onPress={() => onLogin(email, password)}
            style={styles.loginButton}
          />

          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.socialButtons}>
            <Button
              title="Continue with Apple"
              variant="social"
              iconName="apple1"
              onPress={() => {}}
              style={styles.loginButton}
            />
            <Button
              title="Continue with Google"
              variant="social"
              iconName="google"
              onPress={() => {}}
              style={styles.loginButton}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

SignupScreen.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5F6FE",
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 40,
    borderTopRightRadius: RFPercentage(4),
    borderTopLeftRadius: RFPercentage(4),
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },

  form: {
    marginBottom: 24,
  },
  formOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  rememberButton: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  forgotButton: {
    marginLeft: 0,
  },
  loginButton: {
    marginBottom: 24,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  orText: {
    marginHorizontal: 16,
    color: "#666",
    fontSize: 14,
  },
  socialButtons: {
    justifyContent: "center",
  },
  socialButton: {
    marginHorizontal: 12,
  },
  signupPrompt: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFValue(10),
    marginBottom: RFValue(20),
  },
  promptText: {
    color: "#333",
    fontSize: 16,
  },
  signupButton: {
    color: "#38BAEF",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default SignupScreen;
