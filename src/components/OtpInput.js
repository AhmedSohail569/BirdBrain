import React from "react";
import {View, StyleSheet} from "react-native";
import {OtpInput} from "react-native-otp-entry";
import PropTypes from "prop-types";
import {Text} from "./Common";
import {RFValue} from "react-native-responsive-fontsize";

const OtpInputField = ({value, onChange, error, style}) => {
  return (
    <View style={[styles.container, style]}>
      <OtpInput
        numberOfDigits={4}
        value={value}
        onTextChange={onChange}
        focusColor="#5DC9F4"
        placeholder="0000"
        theme={{
          pinCodeContainerStyle: [
            styles.otpBox,
            error ? styles.otpBoxError : styles.otpBoxDefault,
          ],
          focusedPinCodeContainerStyle: {
            borderColor: "#5DC9F4",
          },
          pinCodeTextStyle: styles.otpText,
        }}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

OtpInputField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    alignItems: "center",
  },
  otpBox: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  otpBoxDefault: {
    borderColor: "#E0E0E0",
  },
  otpBoxError: {
    borderColor: "#FF4D4D",
  },
  otpText: {
    fontSize: 22,
    color: "#333",
    fontWeight: "500",
  },
  errorText: {
    color: "#333",
    fontSize: 18,
    textAlign: "center",
    marginTop: RFValue(16),
  },
});

export default OtpInputField;
