// src/components/PaginationDots.js
import React from "react";
import {View, StyleSheet} from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

export default function PaginationProgress({length, progressValue}) {
  return (
    <View style={styles.container}>
      {Array.from({length}).map((_, i) => (
        <Dot key={i} index={i} animValue={progressValue} />
      ))}
    </View>
  );
}

const Dot = ({index, animValue}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const width = interpolate(
      animValue.value,
      [index - 1, index, index + 1],
      [8, 20, 8],
      Extrapolate.CLAMP,
    );
    const opacity = interpolate(
      animValue.value,
      [index - 1, index, index + 1],
      [0.3, 1, 0.3],
      Extrapolate.CLAMP,
    );
    return {
      width,
      opacity,
    };
  });

  return <Animated.View style={[styles.dot, animatedStyle]} />;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
    marginTop: 10,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#4A90E2",
    marginHorizontal: 4,
  },
});
