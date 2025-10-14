import React, {useState} from "react";
import {View, StyleSheet, Modal} from "react-native";
import PropTypes from "prop-types";
import Header from "../../../components/Header";
import {Button, Text, TextInput} from "../../../components/Common";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";

import Icon from "react-native-vector-icons/Ionicons";

const SetPasswordScreen = ({navigation}) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleDone = () => {
    // ✅ Password validation (optional)
    if (newPassword.length < 8 || confirmPassword.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // ✅ Show success modal
    setShowSuccessModal(true);
  };

  const handleGoToLogin = () => {
    setShowSuccessModal(false);
    navigation.reset({
      index: 1,
      routes: [{name: "GetStarted"}, {name: "Login"}],
    });
  };

  return (
    <View style={styles.container}>
      <Header
        variant="default"
        title={"Set Password"}
        showBack
        onBack={() => navigation.goBack()}
      />

      <View style={styles.content}>
        <View>
          <View style={styles.header}>
            <Text variant="title" style={{fontWeight: "500"}}>
              Set your Password
            </Text>
            <Text variant="body" style={{fontWeight: "300", marginTop: 10}}>
              To secure your account, use an 8-digit password
            </Text>
          </View>

          <View style={styles.form}>
            <TextInput
              label="New Password"
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="********"
              secureTextEntry
            />
            <TextInput
              label="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="********"
              secureTextEntry
            />
          </View>
        </View>

        <View>
          <Button
            title="Done"
            onPress={handleDone}
            style={styles.loginButton}
          />
        </View>
      </View>

      {/* === Success Modal Overlay === */}
      <Modal
        visible={showSuccessModal}
        animationType="fade"
        transparent={true}
        statusBarTranslucent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Icon name="checkmark-circle" size={80} color="#5DC9F4" />
            <Text variant="title" style={styles.modalTitle} align="center">
              Password Successfully Changed
            </Text>
            <Text variant="body" style={styles.modalMessage}>
              Your password has been updated! You can now log in with your new
              password.
            </Text>
            <Button
              title="Login"
              onPress={handleGoToLogin}
              style={styles.modalButton}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

SetPasswordScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
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
    marginBottom: 40,
  },
  form: {
    marginBottom: 24,
  },
  loginButton: {
    marginBottom: 24,
  },

  // === Modal Styles ===
  modalOverlay: {
    flex: 1,
    // backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: RFPercentage(100),
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontWeight: "600",
    color: "#000",
    marginTop: 20,
  },
  modalMessage: {
    color: "#555",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  modalButton: {
    width: "100%",
  },
});

export default SetPasswordScreen;
