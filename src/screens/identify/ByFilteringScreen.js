import {useNavigation} from "@react-navigation/native";
import React, {useState} from "react";
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import {Dropdown, Text} from "~components/Common";
import Header from "~components/Header";

const dummyBirds = [
  {
    id: 1,
    name: "American bushtit",
    branch: "Psaltriparus minimus",
    image: "https://picsum.photos/seed/bird1/200",
  },
  {
    id: 2,
    name: "American crow",
    branch: "Psaltriparus minimus",
    image: "https://picsum.photos/seed/bird2/210",
  },
  {
    id: 3,
    name: "American goldfinch",
    branch: "Corvius brachyrhynchos",
    image: "https://picsum.photos/seed/bird3/220",
  },
  {
    id: 4,
    name: "American robin",
    branch: "Spinus tristis",
    image: "https://picsum.photos/seed/bird4/230",
  },
  {
    id: 5,
    name: "Northern Cardinal",
    branch: "Turdus migratorius",
    image: "https://picsum.photos/seed/bird5/240",
  },
];

const dummyFoods = [
  {id: 1, label: "All Types", image: "https://picsum.photos/seed/food1/90"},
  {id: 2, label: "Cracked Corn", image: "https://picsum.photos/seed/food2/91"},
  {id: 3, label: "Fruit", image: "https://picsum.photos/seed/food3/92"},
  {id: 4, label: "Millet", image: "https://picsum.photos/seed/food4/93"},
  {id: 5, label: "Peanuts", image: "https://picsum.photos/seed/food5/94"},
];

const dummyFeeders = [
  {id: 1, label: "All Types", image: "https://picsum.photos/seed/feeder1/120"},
  {id: 2, label: "Ground", image: "https://picsum.photos/seed/feeder2/121"},
  {id: 3, label: "Platform", image: "https://picsum.photos/seed/feeder3/122"},
  {
    id: 4,
    label: "Nectar Feeder",
    image: "https://picsum.photos/seed/feeder4/123",
  },
  {
    id: 5,
    label: "Tube Feeder",
    image: "https://picsum.photos/seed/feeder5/124",
  },
];

export default function CommonFeederBirdsScreen() {
  const navigation = useNavigation();
  const [selectedFood, setSelectedFood] = useState(dummyFoods[0]);
  const [selectedFeeder, setSelectedFeeder] = useState(dummyFeeders[0]);

  return (
    <View style={styles.container}>
      <Header
        showBack
        title={"Common Feeder Birds"}
        onBack={() => navigation.goBack()}
      />

      {/* Dropdown Row */}
      <View style={styles.dropdownRow}>
        <Dropdown
          label="Food"
          selected={selectedFood}
          onSelect={setSelectedFood}
          options={dummyFoods}
          renderOption={item => (
            <View style={{alignItems: "center"}}>
              <Image source={{uri: item.image}} style={styles.optionImage} />
              <Text style={styles.optionText}>{item.label}</Text>
            </View>
          )}
        />
        <Dropdown
          label="Feeder"
          selected={selectedFeeder}
          onSelect={setSelectedFeeder}
          options={dummyFeeders}
          renderOption={item => (
            <View style={{alignItems: "center"}}>
              <Image source={{uri: item.image}} style={styles.optionImage} />
              <Text style={styles.optionText}>{item.label}</Text>
            </View>
          )}
        />
      </View>

      {/* Bird Count */}
      <Text style={styles.countText}>{dummyBirds.length} Birds</Text>

      {/* Bird List */}
      <FlatList
        data={dummyBirds}
        numColumns={2}
        contentContainerStyle={{paddingBottom: 80}}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.card}>
            <Image source={{uri: item.image}} style={styles.image} />
            <Text style={styles.birdName}>{item.name}</Text>
            <Text style={styles.birdBranch}>{item.branch}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: "#fff", paddingHorizontal: 15},

  dropdownRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  countText: {
    fontSize: RFValue(13),
    fontWeight: "500",
    color: "#444",
    marginBottom: 8,
  },
  card: {
    flex: 1 / 2,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 8,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    marginBottom: 8,
  },
  birdName: {
    fontSize: RFValue(12),
    textAlign: "left",
    fontWeight: "500",
    color: "#1a1a1a",
  },
  birdBranch: {
    fontSize: RFValue(11),
    textAlign: "left",
    fontWeight: "300",
    color: "#1a1a1a",
  },
  optionImage: {width: 60, height: 60, borderRadius: 30, marginBottom: 8},
  optionText: {fontSize: RFValue(12), textAlign: "center"},
});
