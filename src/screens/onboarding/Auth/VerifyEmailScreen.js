import React, {useState} from "react";
import {View, StyleSheet, Image} from "react-native";
import PropTypes from "prop-types";
import Header from "../../../components/Header";
import {Button, Text, TextInput} from "../../../components/Common";
import {Images} from "../../../assets";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import {Checkbox} from "react-native-paper";
import OtpInputField from "~components/OtpInput";

const VerifyEmailScreen = ({navigation}) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleVerify = () => {
    if (otp.length < 4) {
      setError("Please enter the 4-digit OTP");
    } else {
      setError("");
      // verify OTP logic
    }
  };

  return (
    <View style={styles.container}>
      <Header
        variant="default"
        title={"Verify your email"}
        showBack
        onBack={() => navigation.goBack()}
      />

      <View style={styles.content}>
        <View>
          <View style={styles.header}>
            <Text variant="title" style={{fontWeight: "500"}}>
              Verify your email address
            </Text>
            <Text variant="body" style={{fontWeight: "300", marginTop: 10}}>
              Enter your verification code to set password
            </Text>
          </View>

          <View style={styles.form}>
            <OtpInputField value={otp} onChange={setOtp} error={error} />
          </View>
        </View>
        <View>
          <Button
            title="Continue"
            onPress={() => navigation.navigate("SetPassword")}
            style={styles.loginButton}
          />
        </View>
      </View>
    </View>
  );
};

VerifyEmailScreen.propTypes = {
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

export default VerifyEmailScreen;
