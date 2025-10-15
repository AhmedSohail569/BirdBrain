import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/Ionicons";
import {Images} from "~assets";
import {ScrollView, Text} from "~components/Common";
import Header from "~components/Header";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header variant="home" />

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{paddingBottom: 100}}>
        {/* 🔍 Search Bar */}
        <View style={styles.searchContainer}>
          <Icon
            name="search"
            size={20}
            color="#777"
            style={{marginLeft: 10}}
            onPress={() => navigation.navigate("SearchScreen")}
          />
          <TextInput
            placeholder="Search over 30k species"
            placeholderTextColor="#777"
            style={styles.searchInput}
            onTouchStart={() => navigation.navigate("SearchScreen")}
            onAccessibilityTap={() => navigation.navigate("SearchScreen")}
            editable={false}
          />
        </View>

        {/* 🧠 Identify Buttons */}
        <View style={styles.identifyContainer}>
          {/* 1️⃣ Identify by Photo */}
          <TouchableOpacity activeOpacity={0.9} style={styles.identifyWrapper}>
            <LinearGradient
              colors={["#87CEEB", "#87CEEB"]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.identifyCard}>
              <Icon name="camera" color={"#fff"} size={24} />
              <Text style={styles.identifyText}>Identify by Photo</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* 2️⃣ Identify by Sound */}
          <TouchableOpacity activeOpacity={0.9} style={styles.identifyWrapper}>
            <LinearGradient
              colors={["#4776E6", "#8E54E9"]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.identifyCard}>
              <Icon name="musical-note" color={"#fff"} size={24} />
              <Text style={styles.identifyText}>Identify by Sound</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* 3️⃣ Birding Hotspots (solid color) */}
          {/* 3️⃣ Birding Hotspots */}
          <TouchableOpacity activeOpacity={0.9} style={styles.identifyWrapper}>
            <ImageBackground
              source={Images.hotspotHome}
              style={styles.identifyCard}
              imageStyle={styles.hotspotImage}>
              <View style={styles.identifyContent}>
                <Icon name="location-sharp" color={"#fff"} size={24} />
                <Text style={styles.identifyText}>Birding Hotspots</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          {/* 4️⃣ Identify by Filtering */}
          <TouchableOpacity activeOpacity={0.9} style={styles.identifyWrapper}>
            <LinearGradient
              colors={["#2B5876", "#4E4376"]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.identifyCard}>
              <Icon name="funnel" color={"#fff"} size={24} />
              <Text style={styles.identifyText}>Identify by Filtering</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* 💬 Ask BirdBrain */}
        <TouchableOpacity style={styles.askContainer}>
          <View
            style={{backgroundColor: "#fff", padding: 12, borderRadius: 20}}>
            <Icon name="chatbubble-outline" size={20} color="#000" />
          </View>
          <Text style={styles.askText}>
            Ask{" "}
            <Text style={{fontWeight: "700", color: "#fff"}}>BirdBrain</Text>{" "}
            about your bird
          </Text>
          <View
            style={{
              backgroundColor: "#aee4f9",
              padding: 6,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "#fff",
            }}>
            <Icon name="arrow-forward" size={20} color="#fff" />
          </View>
        </TouchableOpacity>

        {/* 📸 ProCapture Section */}
        <View style={styles.proContainer}>
          <View style={{flexDirection: "row", gap: 5, alignItems: "center"}}>
            <Icon
              name="image-outline"
              size={23}
              color="#333"
              style={{marginBottom: 10}}
            />
            <Text variant="cardTitle">ProCapture: Bird Photo Enhancement</Text>
          </View>
          <View style={styles.proCard}>
            <Image
              source={Images.procaptureBird}
              style={styles.proImage}
              resizeMode="cover"
            />
            <View style={styles.proRight}>
              <Text style={styles.proText}>
                Turn your phone into a pro camera!
              </Text>
              <TouchableOpacity style={styles.tryButton}>
                <Text style={styles.tryButtonText}>Try Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* 📊 Your Collection */}
        <View style={styles.collectionContainer}>
          <Text variant="cardTitle">Your Collection</Text>
          <View style={styles.statsRow}>
            {[
              {amount: "1", tier: "S-Rarity"},
              {amount: "4", tier: "A-Rarity"},
              {amount: "14", tier: "B-Rarity"},
              {amount: "8", tier: "C-Rarity"},
            ].map((item, index) => (
              <View key={index} style={styles.statBox}>
                <Text style={styles.statNumber}>{item.amount}</Text>
                <View
                  style={{flexDirection: "row", alignItems: "center", gap: 4}}>
                  <Icon name="sparkles-outline" size={12} color="#E25934" />
                  <Text style={styles.statName}>{item.tier}</Text>
                </View>
              </View>
            ))}
          </View>
          <View style={styles.line} />
          <View style={{marginVertical: RFValue(10), gap: 10}}>
            <View
              style={{flexDirection: "row", justifyContent: "space-between"}}>
              <Text style={styles.statName}>Collection Score:</Text>
              <Text style={styles.statStatus}>Impressive!</Text>
            </View>
            <View
              style={{flexDirection: "row", justifyContent: "space-between"}}>
              <Text style={styles.statName}>Rarity Index:</Text>
              <Text style={styles.statStatus}>Rising</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  scrollContainer: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEF5F9",
    borderRadius: 16,
    paddingVertical: 10,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: "#000",
  },
  identifyContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 16,
  },
  identifyWrapper: {
    width: "48%",
    marginBottom: 12,
  },
  identifyCard: {
    height: 70,
    borderRadius: 16,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 16,
    gap: 8,
  },
  identifyText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: RFValue(11),
    textAlign: "left",
  },
  hotspotImage: {
    borderRadius: 16,
    resizeMode: "cover",
  },

  identifyContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
    height: "100%",
  },
  askContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#87CEEB",
    borderRadius: 16,
    padding: 14,
    justifyContent: "space-between",
    marginTop: 10,
  },
  askText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
    color: "#fff",
  },
  proContainer: {
    marginTop: 20,
  },

  proCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  proImage: {
    width: RFPercentage(18),
    height: RFPercentage(18),
    borderRadius: 12,
  },
  proRight: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },
  proText: {
    fontSize: RFValue(14),
    fontWeight: "500",
    color: "#000",
    marginBottom: 10,
  },
  tryButton: {
    borderWidth: 1,
    borderColor: "#5DC9F4",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignSelf: "center",
    width: "80%",
  },
  tryButtonText: {
    color: "#5DC9F4",
    fontWeight: "500",
    textAlign: "center",
  },
  collectionContainer: {
    padding: 16,
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 16,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  statBox: {
    marginTop: RFValue(5),
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 4,
  },
  statNumber: {
    fontSize: RFValue(12),
    fontWeight: "700",
    color: "#5DC9F4",
  },
  statName: {
    fontSize: RFValue(11),
    fontWeight: "500",
    color: "#333",
  },
  statStatus: {
    fontSize: RFValue(12),
    fontWeight: "500",
    color: "#38BAEF",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
    marginTop: RFValue(10),
  },
});

export default HomeScreen;
