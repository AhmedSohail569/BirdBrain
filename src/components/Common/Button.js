import React from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import AppText from "./Text";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/AntDesign";
import LinearGradient from "react-native-linear-gradient";
import {useAppTheme} from "../../theme";
import {RFValue} from "react-native-responsive-fontsize";

const Button = ({
  onPress,
  title,
  subText,
  variant = "primary",
  iconName,
  disabled = false,
  left,
  right,
  style,
  textStyle,
  subTextStyle,
}) => {
  const theme = useAppTheme();

  if (variant === "primary") {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[disabled && styles.disabled, style]}>
        <LinearGradient
          colors={theme.gradients?.primary || ["#87CEEB", "#38BAEF"]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={[styles.gradientButton, style]}>
          <AppText style={[styles.text, styles.primaryText, textStyle]}>
            {title}
          </AppText>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        styles[variant],
        disabled && styles.disabled,
        style,
      ]}>
      {variant === "social" && <Icon name={iconName} size={20} color="#000" />}
      <View style={{flexDirection: "row", gap: 10, alignItems: "center"}}>
        {left && left}
        <View>
          <AppText style={[styles.text, styles[`${variant}Text`], textStyle]}>
            {title}
          </AppText>
          {subText && (
            <AppText
              style={[
                styles.text,
                styles[`${variant}SubText`],
                subTextStyle,
                {maxWidth: "70%"},
              ]}>
              {subText}
            </AppText>
          )}
        </View>
      </View>
      {right && right}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "outline", "social"]),
  iconName: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  gradientButton: {
    width: "100%",
    paddingVertical: RFValue(15),
    paddingHorizontal: RFValue(24),
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  secondary: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#5DC9F4",
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#333",
  },
  social: {
    flexDirection: "row",
    backgroundColor: "#fff",
    gap: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  primaryText: {
    color: "#FFFFFF",
  },
  secondaryText: {
    color: "#5DC9F4",
  },
  outlineText: {
    color: "#666666",
  },
  socialText: {
    color: "#333",
  },
  sectionSubText: {color: "#737B98", fontWeight: "400", fontSize: RFValue(10)},
});

export default Button;
