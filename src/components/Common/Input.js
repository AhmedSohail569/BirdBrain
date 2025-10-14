import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import {TextInput as PaperInput, IconButton} from "react-native-paper";
import PropTypes from "prop-types";

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  error,
  style,
  keyboardType,
  autoCapitalize = "none",
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={[styles.container, style]}>
      <PaperInput
        mode="outlined"
        label={label}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry && !isPasswordVisible}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        outlineColor={error ? "#FF4D4D" : "#E0E0E0"}
        activeOutlineColor="#5DC9F4"
        textColor="#333"
        placeholderTextColor="#999"
        style={styles.input}
        right={
          secureTextEntry ? (
            <PaperInput.Icon
              icon={isPasswordVisible ? "eye-off" : "eye"}
              onPress={togglePasswordVisibility}
              color="#333"
            />
          ) : null
        }
        theme={{
          roundness: 12,
          colors: {
            background: "#FFFFFF",
            placeholder: "#999",
            primary: "#5DC9F4",
            onSurfaceVariant: "#333",
            error: "#FF4D4D",
          },
        }}
      />

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  error: PropTypes.string,
  style: PropTypes.object,
  keyboardType: PropTypes.string,
  autoCapitalize: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#FFFFFF",
    fontSize: 16,
    height: 60,
    borderRadius: 8,
  },
  errorText: {
    color: "#FF4D4D",
    fontSize: 12,
    marginTop: 4,
  },
});

export default Input;
