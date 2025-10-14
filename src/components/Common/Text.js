import React from "react";
import {Text, StyleSheet, TouchableOpacity} from "react-native";
import PropTypes from "prop-types";

const AppText = ({
  children,
  onPress,
  variant = "body",
  color = "default",
  align = "left",
  style,
  numberOfLines,
  ...props
}) => {
  return onPress ? (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={[
          styles.text,
          styles[variant],
          styles[color],
          {textAlign: align},
          style,
        ]}
        numberOfLines={numberOfLines}
        {...props}>
        {children}
      </Text>
    </TouchableOpacity>
  ) : (
    <Text
      style={[
        styles.text,
        styles[variant],
        styles[color],
        {textAlign: align},
        style,
      ]}
      numberOfLines={numberOfLines}
      {...props}>
      {children}
    </Text>
  );
};

AppText.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "title",
    "subtitle",
    "heading",
    "body",
    "caption",
    "link",
    "button",
    "small",
  ]),
  color: PropTypes.oneOf(["default", "primary", "secondary", "muted", "error"]),
  align: PropTypes.oneOf(["left", "center", "right"]),
  style: PropTypes.object,
  numberOfLines: PropTypes.number,
};

const styles = StyleSheet.create({
  text: {
    color: "#000000",
  },

  // ===== VARIANTS =====
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  heading: {
    fontSize: 22,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  body: {
    fontSize: 16,
    fontWeight: "400",
  },
  caption: {
    fontSize: 14,
    fontWeight: "400",
  },
  small: {
    fontSize: 12,
    fontWeight: "400",
  },
  link: {
    fontSize: 16,
    fontWeight: "500",
    color: "#5DC9F4",
  },
  button: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  // ===== COLOR SCHEMES =====
  default: {
    color: "#000000",
  },
  primary: {
    color: "#5DC9F4",
  },
  secondary: {
    color: "#666666",
  },
  muted: {
    color: "#9E9E9E",
  },
  error: {
    color: "#FF4D4D",
  },
});

export default AppText;
