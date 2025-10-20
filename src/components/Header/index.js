import React, {useEffect} from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import PropTypes from "prop-types";
import {Images} from "../../assets";
import {useStatusBar} from "../../components/StatusBarProvider";
import {RFValue} from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/Ionicons";
import {Text} from "~components/Common";

const Header = ({
  variant = "default", // "default" | "auth" | "centerLogo" | "home"
  title,
  showBack = false,
  showSkip = false,
  showSearch = false,
  showShare = false,
  showShare_lg = false,
  showOptions = false,
  onSearch,
  onShare,
  onShare_lg,
  onOptions,
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

          <View
            style={{
              flexDirection: "row",
              gap: 10,
              position: "absolute",
              right: 16,
            }}>
            {showSearch && (
              <TouchableOpacity onPress={onSearch} style={styles.optionButton}>
                <Icon name="search" size={20} />
              </TouchableOpacity>
            )}

            {showShare && (
              <TouchableOpacity onPress={onShare} style={styles.optionButton}>
                <Icon name="share-social-outline" size={20} />
              </TouchableOpacity>
            )}

            {showShare_lg && (
              <TouchableOpacity
                onPress={onShare_lg}
                style={styles.shareButtonLarge}>
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: RFValue(11),
                  }}>
                  Share My Find
                </Text>
                <Icon name="arrow-redo-outline" size={20} color={"#fff"} />
              </TouchableOpacity>
            )}

            {showOptions && (
              <TouchableOpacity onPress={onOptions} style={styles.optionButton}>
                <Icon name="ellipsis-horizontal-outline" size={20} />
              </TouchableOpacity>
            )}

            {!showSearch && !showShare && !showShare_lg && !showOptions && (
              <View style={styles.sidePlaceholder} />
            )}
          </View>
        </View>
      </>
    );
  }

  // === OTHER VARIANTS ===
  return (
    <>
      <StatusBar backgroundColor={bgColor} barStyle={barStyle} animated />
      <View style={[styles.header, {backgroundColor: bgColor}, style]}>
        {/* Left: Back Button or Placeholder */}
        {showBack ? (
          <TouchableOpacity onPress={onBack} style={styles.sideButton}>
            <Image
              source={variant === "auth" ? Images.BackWhite : Images.Back}
              style={styles.backIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.sidePlaceholder} />
        )}

        {/* Center: Title or Logo (ABSOLUTELY CENTERED) */}
        <View style={styles.centerContainer}>
          {variant === "centerLogo" ? (
            <Image
              source={require("../../assets/icons/title.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          ) : (
            <Text style={styles.title}>{title}</Text>
          )}
        </View>

        {/* Right: Skip Button or Placeholder */}
        {showSkip ? (
          <TouchableOpacity onPress={onSkip} style={styles.sideButton}>
            <Text style={styles.skipText}>{skipLabel}</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.sidePlaceholder} />
        )}

        <View
          style={{
            flexDirection: "row",
            gap: 10,
            position: "absolute",
            right: 16,
          }}>
          {showSearch && (
            <TouchableOpacity onPress={onSearch} style={styles.optionButton}>
              <Icon name="search" size={20} />
            </TouchableOpacity>
          )}

          {showShare && (
            <TouchableOpacity onPress={onShare} style={styles.optionButton}>
              <Icon name="share-social-outline" size={20} />
            </TouchableOpacity>
          )}

          {showShare_lg && (
            <TouchableOpacity
              onPress={onShare_lg}
              style={styles.shareButtonLarge}>
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: RFValue(11),
                }}>
                Share My Find
              </Text>
              <Icon name="arrow-redo-outline" size={20} color={"#fff"} />
            </TouchableOpacity>
          )}

          {showOptions && (
            <TouchableOpacity onPress={onOptions} style={styles.optionButton}>
              <Icon name="ellipsis-horizontal-outline" size={20} />
            </TouchableOpacity>
          )}

          {!showSearch && !showShare && !showShare_lg && !showOptions && (
            <View style={styles.sidePlaceholder} />
          )}
        </View>
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
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: RFValue(50), // ✅ fixed consistent height for all header states
    position: "relative",
  },

  // Absolute center container for title/logo
  centerContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    height: 30,
    width: 120,
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000000",
    textAlign: "center",
  },

  sideButton: {
    height: 40, // ✅ ensure consistent height
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  optionButton: {backgroundColor: "#F7F6F9", padding: 10, borderRadius: 20},
  shareButtonLarge: {
    backgroundColor: "#87CEEB",
    padding: 10,
    borderRadius: 20,
    flexDirection: "row",
    gap: 8,
  },

  sidePlaceholder: {
    height: 40, // ✅ same height as button
    width: 40,
  },

  skipText: {
    color: "#5DC9F4",
    fontSize: 16,
    fontWeight: "500",
  },

  // HOME VARIANT
  homeHeader: {
    justifyContent: "space-between",
    height: RFValue(50), // ✅ same height for consistency
  },
  homeLogo: {
    height: 32,
    width: 140,
  },
});

export default Header;
