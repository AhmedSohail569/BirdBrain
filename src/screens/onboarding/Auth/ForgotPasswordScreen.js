import React, {useState} from "react";
import {View, StyleSheet} from "react-native";
import PropTypes from "prop-types";
import Header from "../../../components/Header";
import {Button, Text, TextInput} from "../../../components/Common";
import {RFValue} from "react-native-responsive-fontsize";

const ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Header
        variant="default"
        title={"Forgot Password"}
        showBack
        onBack={() => navigation.goBack()}
      />

      <View style={styles.content}>
        <View>
          <View style={styles.header}>
            <Text variant="title" style={{fontWeight: "500"}}>
              Forgot Password?
            </Text>
            <Text variant="body" style={{fontWeight: "300", marginTop: 10}}>
              Enter your email address for instructions
            </Text>
          </View>

          <View style={styles.form}>
            <TextInput
              label="Email Address"
              value={email}
              onChangeText={setEmail}
              placeholder="active@gmail.com"
            />
          </View>
        </View>
        <View>
          <Button
            title="Send Instructions"
            onPress={() => navigation.navigate("VerifyEmail")}
            style={styles.loginButton}
          />

          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.optionButtons}>
            <Button
              title="Log In"
              variant="outline"
              onPress={() => {}}
              style={styles.optionButton}
            />
            <Button
              title="Sign Up"
              variant="outline"
              onPress={() => {}}
              style={styles.optionButton}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

ForgotPasswordScreen.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5F6FE",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: RFValue(30),
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
  },
  header: {
    // alignItems: "center",
    marginBottom: 40,
  },

  form: {
    marginBottom: 24,
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
  optionButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  optionButton: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default ForgotPasswordScreen;
