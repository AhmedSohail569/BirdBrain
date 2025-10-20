import React, {useState} from "react";
import {View, StyleSheet, Image} from "react-native";
import PropTypes from "prop-types";
import Header from "../../../components/Header";
import {Button, Text, TextInput} from "../../../components/Common";
import {Images} from "../../../assets";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import {Checkbox} from "react-native-paper";

const LoginScreen = ({onLogin, onBack, navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={styles.container}>
      <Header variant="auth" showBack onBack={() => navigation.goBack()} />

      <View style={styles.content}>
        <View style={styles.header}>
          <Image source={Images.BirdBrainLogo} resizeMode="contain" />
          <Text variant="title" style={{fontWeight: "400"}}>
            Login
          </Text>
        </View>

        <View style={styles.form}>
          <TextInput
            label="Email Address"
            value={email}
            onChangeText={setEmail}
            placeholder="active@gmail.com"
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="********"
            secureTextEntry
          />

          <View style={styles.formOptions}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
              <Checkbox.Item
                color="#38BAEF"
                status="checked"
                theme={{borderRadius: 30}}
                style={{
                  padding: 0,
                  margin: 0,
                  width: RFValue(40),
                  height: RFValue(40),
                  marginLeft: RFValue(-18),
                }}
              />
              <Text style={{fontSize: 14, fontWeight: "500", color: "#333"}}>
                Remember for 30 days
              </Text>
            </View>

            <Text
              style={{fontSize: 14, fontWeight: "500", color: "#333"}}
              onPress={() => navigation.navigate("ForgotPassword")}>
              Forgot Password?
            </Text>
          </View>
        </View>

        <Button
          title="Log in"
          onPress={() => navigation.navigate("App")}
          style={styles.loginButton}
        />

        <View style={styles.signupPrompt}>
          <Text style={styles.promptText}>Don't have an account? </Text>
          <Text
            style={styles.signupButton}
            onPress={() => navigation.navigate("Signup")}>
            Sign up
          </Text>
        </View>

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
    </View>
  );
};

LoginScreen.propTypes = {
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
    marginBottom: 40,
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

export default LoginScreen;
