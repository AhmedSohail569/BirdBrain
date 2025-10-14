// AppLayout.js
import React from "react";
import {View, StyleSheet, StatusBar, useColorScheme} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export default ({
  children,
  style,
  safeArea = true,
  statusBarColor = "#FFFFFF",
  statusBarStyle,
}) => {
  const isDarkMode = useColorScheme() === "dark";
  const barStyle =
    statusBarStyle || (isDarkMode ? "light-content" : "dark-content");

  return (
    <View style={[styles.containerStyle, style]}>
      <StatusBar
        backgroundColor={statusBarColor}
        barStyle={barStyle}
        animated
      />
      {safeArea ? (
        <SafeAreaView
          edges={["top", "left", "right"]}
          style={{flex: 1, backgroundColor: statusBarColor}}>
          {children}
        </SafeAreaView>
      ) : (
        children
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {flex: 1},
});
