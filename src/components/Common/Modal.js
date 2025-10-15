import React, {useEffect, useRef} from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  Platform,
} from "react-native";
import CustomScrollView from "./Scrollview";

const {height: SCREEN_HEIGHT} = Dimensions.get("window");

const CustomModal = ({
  visible,
  onClose,
  children,
  maxHeight = SCREEN_HEIGHT * 0.85, // limit modal height to 85% of screen
  backgroundColor = "#fff",
  borderRadius = 20,
}) => {
  const slideAnim = useRef(new Animated.Value(SCREEN_HEIGHT)).current;

  // Handle open/close animations
  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: SCREEN_HEIGHT,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      {/* 🔲 Background dismiss area */}
      <TouchableOpacity
        style={styles.backdrop}
        activeOpacity={1}
        onPress={onClose}
      />

      {/* 🧩 Modal Container */}
      <Animated.View
        style={[
          styles.modalContainer,
          {
            backgroundColor,
            borderTopLeftRadius: borderRadius,
            borderTopRightRadius: borderRadius,
            maxHeight,
            transform: [{translateY: slideAnim}],
          },
        ]}>
        {/* Handle indicator */}
        <View style={styles.handleContainer}>
          <View style={styles.handle} />
        </View>

        {/* Content Area (scrollable) */}
        <CustomScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{paddingBottom: 20}}>
          {children}
        </CustomScrollView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  modalContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  handleContainer: {
    alignItems: "center",
    marginBottom: 8,
  },
  handle: {
    width: 45,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#ccc",
  },
});

export default CustomModal;
