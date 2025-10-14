import React, {useEffect} from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import PropTypes from "prop-types";
import {Images} from "../../assets";
import {useStatusBar} from "../../components/StatusBarProvider";

const Header = ({
  variant = "default", // "default" | "auth" | "centerLogo" | "home"
  title,
  showBack = false,
  showSkip = false,
  skipLabel = "Skip",
  onBack,
  onSkip,
  backgroundColor,
  style,
}) => {
  const {setStatusBar} = useStatusBar();

  // Determine background and status bar style automatically
  const bgColor =
    backgroundColor ||
    (variant === "auth"
      ? "#E5F6FE"
      : variant === "centerLogo"
      ? "transparent"
      : "#FFFFFF");

  const barStyle =
    bgColor === "#E5F6FE" || bgColor === "#FFFFFF"
      ? "dark-content"
      : "light-content";

  useEffect(() => {
    setStatusBar(bgColor, barStyle);
  }, [bgColor, barStyle]);

  // === HOME VARIANT ===
  if (variant === "home") {
    return (
      <>
        <StatusBar backgroundColor={bgColor} barStyle={barStyle} animated />

        <View
          style={[
            styles.header,
            {backgroundColor: bgColor},
            styles.homeHeader,
            style,
          ]}>
          <Image
            source={require("../../assets/icons/title.png")}
            style={styles.homeLogo}
            resizeMode="contain"
          />
        </View>
      </>
    );
  }

  // === OTHER VARIANTS ===
  return (
    <>
      <StatusBar backgroundColor={bgColor} barStyle={barStyle} animated />

      <View
        style={[
          styles.header,
          {backgroundColor: bgColor},
          variant === "centerLogo" && styles.centerLogoHeader,
          style,
        ]}>
        {/* Left: Back Button */}
        {showBack ? (
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Image
              source={variant === "auth" ? Images.BackWhite : Images.Back}
              style={styles.backIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.placeholder} />
        )}

        {/* Center: Title or Logo */}
        {variant === "centerLogo" ? (
          <Image
            source={require("../../assets/icons/title.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        ) : (
          <Text style={styles.title}>{title}</Text>
        )}

        {/* Right: Skip Button */}
        {showSkip ? (
          <TouchableOpacity onPress={onSkip} style={styles.skipButton}>
            <Text style={styles.skipText}>{skipLabel}</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.placeholder} />
        )}
      </View>
    </>
  );
};

Header.propTypes = {
  variant: PropTypes.oneOf(["default", "auth", "centerLogo", "home"]),
  title: PropTypes.string,
  showBack: PropTypes.bool,
  showSkip: PropTypes.bool,
  skipLabel: PropTypes.string,
  onBack: PropTypes.func,
  onSkip: PropTypes.func,
  backgroundColor: PropTypes.string,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  centerLogoHeader: {
    justifyContent: "center",
  },
  logo: {
    height: 30,
    width: 120,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000000",
  },
  backButton: {
    padding: 8,
  },
  backIcon: {},
  skipButton: {
    padding: 8,
  },
  skipText: {
    color: "#5DC9F4",
    fontSize: 16,
    fontWeight: "500",
  },
  placeholder: {
    width: 32,
  },
  // === NEW HOME VARIANT ===
  homeHeader: {
    justifyContent: "flex-start",
  },
  homeLogo: {
    height: 32,
    width: 140,
  },
});

export default Header;
