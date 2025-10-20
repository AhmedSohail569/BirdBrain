import React from "react";
import {View, TouchableOpacity, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {Text} from "~components/Common";

const AskBirdBrain = ({onPress}) => {
  return (
    <TouchableOpacity
      style={styles.askContainer}
      activeOpacity={0.8}
      onPress={onPress}>
      <View style={styles.iconContainer}>
        <Icon name="chatbubble-ellipses" size={20} color="#000" />
      </View>

      <Text style={styles.askText}>
        Ask <Text style={styles.highlight}>BirdBrain</Text> about your bird
      </Text>

      <View style={styles.arrowContainer}>
        <Icon name="arrow-forward" size={20} color="#fff" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  askContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#87CEEB",
    borderRadius: 16,
    padding: 14,
    justifyContent: "space-between",
    marginTop: 10,
  },
  iconContainer: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 20,
  },
  askText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
    color: "#fff",
  },
  highlight: {
    fontWeight: "700",
    color: "#fff",
  },
  arrowContainer: {
    backgroundColor: "#aee4f9",
    padding: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
  },
});

export default AskBirdBrain;
