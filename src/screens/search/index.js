import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/Ionicons";
import {Images} from "~assets";
import {ScrollView, Text} from "~components/Common";
import Header from "~components/Header";

const birdLists = [
  {id: "1", name: "Common Landbirds", image: Images.landbirds},
  {id: "2", name: "Common Waders", image: Images.waders},
  {id: "3", name: "Common Natatores", image: Images.natatores},
  {id: "4", name: "Common Songbirds", image: Images.songBirds},
  {id: "5", name: "Common Raptors", image: Images.raptors},
  {id: "6", name: "Common Colorful Birds", image: Images.colorfulBirds},
];

const SearchScreen = ({navigation}) => {
  const renderBirdItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.card}
      onPress={() => console.log("Pressed:", item.name)}>
      <Image source={item.image} style={styles.cardImage} resizeMode="cover" />
      <Text style={styles.cardText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title={"Search"} showBack onBack={() => navigation.goBack()} />

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{paddingBottom: 100}}>
        {/* 🔍 Search Bar */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#777" style={{marginLeft: 10}} />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#777"
            style={styles.searchInput}
          />
        </View>

        {/* 🐦 Bird Lists Grid */}
        <FlatList
          data={birdLists}
          renderItem={renderBirdItem}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={{justifyContent: "space-between"}}
          showsVerticalScrollIndicator={false}
          style={styles.listContainer}
          scrollEnabled={false} // FlatList is inside ScrollView
        />
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
  listContainer: {
    marginTop: 20,
  },
  card: {
    width: "48%",
    marginBottom: 16,
  },
  cardImage: {
    borderRadius: 14,
    width: "100%",
    height: RFPercentage(13),
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  cardText: {
    fontSize: RFValue(13),
    fontWeight: "500",
    textAlign: "left",
    color: "#333",
    marginVertical: 8,
  },
});

export default SearchScreen;
