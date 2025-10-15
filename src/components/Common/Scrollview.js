import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  View,
  StyleSheet,
} from "react-native";
import PropTypes from "prop-types";

const CustomScrollView = ({children, contentContainerStyle, style}) => {
  return (
    <KeyboardAvoidingView
      style={[styles.flex, style]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0} // adjust if you have headers
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={[styles.container, contentContainerStyle]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <View style={styles.flex}>{children}</View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

CustomScrollView.propTypes = {
  children: PropTypes.node.isRequired,
  contentContainerStyle: PropTypes.object,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    // paddingVertical: 20,
    paddingHorizontal: 16,
  },
});

export default CustomScrollView;
