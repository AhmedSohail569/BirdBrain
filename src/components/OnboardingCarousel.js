import React from "react";
import {View, Text, Image, Dimensions, StyleSheet} from "react-native";
import Animated, {useSharedValue} from "react-native-reanimated";
import {Images} from "../assets";
import {RFPercentage} from "react-native-responsive-fontsize";
import PaginationProgress from "./PaginationProgress";

const {width} = Dimensions.get("window");

const slides = [
  {
    id: 1,
    image: Images.CarouselImage1,
    title: "Identify All Kinds Of Birds Using Camera & Sounds",
    subtitle: "Identify 10+ birds",
  },
  {
    id: 2,
    image: Images.CarouselImage2,
    title: "Explore Birds and Hotspots Around You",
    subtitle: "Discover which birds are near you and where you can see them",
  },
  {
    id: 3,
    image: Images.CarouselImage3,
    title: "Snap a Photo. Get an ID",
    subtitle:
      "Our AI Photo Enhancer turns blurry shots into perfect identifications.",
  },
];

export default function OnboardingCarousel({currentIndex}) {
  const progressValue = useSharedValue(currentIndex);

  const slide = slides[currentIndex];

  return (
    <View style={styles.slide}>
      {/* 🐦 Bird Image */}
      <View style={styles.imageContainer}>
        <Image source={slide.image} style={styles.image} resizeMode="contain" />
      </View>

      {/* 🔵 Pagination Dots */}
      <PaginationProgress
        length={slides.length}
        progressValue={progressValue}
        currentIndex={currentIndex}
      />

      {/* 📝 Text Content */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{slide.title}</Text>
        <Text style={styles.subtitle}>{slide.subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: width * 0.9,
    borderRadius: 40,
    backgroundColor: "#EAF5FF",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: width * 0.9,
    borderRadius: 40,
    height: RFPercentage(50),
  },
  textContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
    marginTop: 6,
  },
});
