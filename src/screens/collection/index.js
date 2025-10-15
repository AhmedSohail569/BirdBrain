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
import {colors} from "~theme/colors";

const CollectionScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header variant="home" />

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{paddingBottom: 100}}>
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
          <Text variant="cardTitle">My Collection</Text>
          <View style={styles.proCard}>
            <View style={{gap: 10}}>
              <View
                style={{flexDirection: "row", justifyContent: "space-between"}}>
                <View
                  style={[
                    styles.proImage,
                    {
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 2,
                      borderStyle: "dashed",
                      borderColor: "#0000001A",
                    },
                  ]}>
                  <View
                    style={{
                      padding: 15,
                      backgroundColor: "#F1F1F1",
                      borderRadius: 40,
                    }}>
                    <Icon name="add" size={25} color={"#333"} />
                  </View>
                  <Text style={{fontWeight: "500", color: "#1B1A1F"}}>
                    Add Collection
                  </Text>
                </View>
                <ImageBackground
                  source={Images.hummingbird}
                  style={styles.proImage}
                  resizeMode="contain">
                  <Text variant="body" style={{fontWeight: "500"}}>
                    Hummingbirds
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}>
                    <Text variant="small" style={{fontWeight: "300"}}>
                      05-04-2025
                    </Text>
                    <Icon
                      name="ellipsis-horizontal-outline"
                      size={20}
                      color={"#333"}
                    />
                  </View>
                </ImageBackground>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  flex: 1,
                }}>
                <ImageBackground
                  source={Images.migratoryBirds}
                  style={styles.proImage}
                  resizeMode="contain">
                  <Text variant="body" style={{fontWeight: "500"}}>
                    Migratory Birds
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}>
                    <Text variant="small" style={{fontWeight: "300"}}>
                      05-04-2025
                    </Text>
                    <Icon
                      name="ellipsis-horizontal-outline"
                      size={20}
                      color={"#333"}
                    />
                  </View>
                </ImageBackground>

                <ImageBackground
                  source={Images.songbirds}
                  style={styles.proImage}
                  resizeMode="contain">
                  <Text variant="body" style={{fontWeight: "500"}}>
                    Songbirds
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}>
                    <Text variant="small" style={{fontWeight: "300"}}>
                      05-04-2025
                    </Text>
                    <Icon
                      name="ellipsis-horizontal-outline"
                      size={20}
                      color={"#333"}
                    />
                  </View>
                </ImageBackground>
              </View>
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

        <View style={styles.collectionContainer}>
          <View
            style={{
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
            }}>
            <Icon name="stats-chart-outline" size={22} color="#E25934" />
            <Text
              variant="cardTitle"
              style={{
                marginBottom: 0,
              }}>
              Rarity Highlights
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
              flex: 1,
              flexWrap: "wrap",
            }}>
            <Text variant="small" style={{width: "20%", color: "#151517"}}>
              Regional Abundance:
            </Text>
            <Text variant="small" style={{width: "40%", fontWeight: "500"}}>
              {"Extremely rare visitor (<5 sightings annually)"}
            </Text>
            <LinearGradient
              colors={["#EC008C", "#FC6767"]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.tierContainer}>
              <Text variant="title" style={{color: "#fff", fontWeight: "400"}}>
                S
              </Text>
            </LinearGradient>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
              flex: 1,
              flexWrap: "wrap",
            }}>
            <Text variant="small" style={{width: "20%", color: "#151517"}}>
              Conservation Status:
            </Text>
            <Text variant="small" style={{width: "40%", fontWeight: "500"}}>
              {"Endangered or threatened (IUCN Red List species)"}
            </Text>
            <LinearGradient
              colors={["#EC008C", "#FC6767"]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.tierContainer}>
              <Text variant="title" style={{color: "#fff", fontWeight: "400"}}>
                S
              </Text>
            </LinearGradient>
          </View>
        </View>

        <View style={styles.collectionContainer}>
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <View
              style={{
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
              }}>
              <Icon
                name="time-outline"
                size={22}
                color="#E25934"
                style={{marginBottom: 10}}
              />
              <Text
                variant="cardTitle"
                style={{
                  marginBottom: 10,
                }}>
                Recent Activity
              </Text>
            </View>
            <Text
              variant="small"
              style={{
                marginBottom: 0,
              }}>
              View All
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
              flex: 1,
              flexWrap: "wrap",
            }}>
            <View style={{flexDirection: "row", gap: 10, alignItems: "center"}}>
              <Image source={Images.bird1} />
              <View style={{gap: 6}}>
                <Text variant="small" style={{fontWeight: "500"}}>
                  Scarlet Robin
                </Text>
                <Text variant="small" style={{color: "#1B1A1F"}}>
                  Added: Jan 2025
                </Text>
              </View>
            </View>
            <LinearGradient
              colors={["#EC008C", "#FC6767"]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.tierContainer}>
              <Text variant="title" style={{color: "#fff", fontWeight: "400"}}>
                S
              </Text>
            </LinearGradient>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
              flex: 1,
              flexWrap: "wrap",
            }}>
            <View style={{flexDirection: "row", gap: 10, alignItems: "center"}}>
              <Image source={Images.bird2} />
              <View style={{gap: 6}}>
                <Text variant="small" style={{fontWeight: "500"}}>
                  Hummingbirds
                </Text>
                <Text variant="small">Added: Mar 2025</Text>
              </View>
            </View>
            <LinearGradient
              colors={["#EC008C", "#FC6767"]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.tierContainer}>
              <Text variant="title" style={{color: "#fff", fontWeight: "400"}}>
                S
              </Text>
            </LinearGradient>
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
    backgroundColor: "#F7F6F9",
    borderRadius: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  proImage: {
    width: RFPercentage(20),
    height: RFPercentage(20),
    borderRadius: RFPercentage(3),
    justifyContent: "flex-end",
    backgroundColor: "#fff",
    padding: 8,
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
  tierContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CollectionScreen;
