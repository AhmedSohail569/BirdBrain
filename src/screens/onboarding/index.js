import React, {useState, useRef} from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Carousel from "react-native-reanimated-carousel";
import {Images} from "../../assets";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import OnboardingCarousel from "../../components/OnboardingCarousel";
import {Button, Text} from "../../components/Common";

const {width} = Dimensions.get("window");

export default function IntroScreen({navigation}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const slides = [1, 2, 3];

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      carouselRef.current?.next();
    } else {
      console.log("✅ Onboarding Complete!");
      navigation.replace("GetStarted");
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      carouselRef.current?.prev();
    }
  };

  const handleSkip = () => {
    console.log("⏭ Skipped Onboarding");
    // navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container} edges={"top"}>
      {/* Header */}
      <View style={styles.header}>
        {currentIndex > 0 ? (
          <TouchableOpacity onPress={handleBack}>
            <Image source={Images.Back} resizeMode="contain" />
          </TouchableOpacity>
        ) : (
          <View style={{width: RFValue(25)}} />
        )}

        <Image
          source={Images.BirdBrainTitleIcon}
          style={styles.logo}
          resizeMode="contain"
        />

        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Carousel */}
      <Carousel
        ref={carouselRef}
        width={width}
        height={RFPercentage(75)}
        data={slides}
        loop={false}
        scrollAnimationDuration={700}
        onSnapToItem={index => setCurrentIndex(index)}
        renderItem={({index}) => <OnboardingCarousel currentIndex={index} />}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <Button
          title={currentIndex === slides.length - 1 ? "Get Started" : "Next"}
          onPress={handleNext}
          style={styles.nextButton}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: "#FFF"},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  logo: {height: 40, width: 120},
  skip: {fontSize: RFValue(12), color: "#1B1A1F"},
  footer: {alignItems: "center", marginBottom: 30},
  nextButton: {
    width: width * 0.85,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  nextText: {color: "#FFF", fontSize: 16, fontWeight: "600"},
});
