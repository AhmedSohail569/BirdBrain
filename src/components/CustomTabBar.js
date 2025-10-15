import React, {useState} from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {RFValue} from "react-native-responsive-fontsize";
import LinearGradient from "react-native-linear-gradient";
import {Text} from "./Common";

// ✅ Reusable AdaptiveModal Component
const AdaptiveModal = ({visible, onClose, title, children}) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <Pressable style={styles.modalBackground} onPress={onClose} />
        <View style={styles.modalContent}>
          <View style={styles.modalHandle} />
          {title && (
            <Text variant="medium" style={styles.modalTitle}>
              {title}
            </Text>
          )}
          <ScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 20}}>
            {children}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const Tab = ({state, descriptors, navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openIdentifyModal = () => setIsModalVisible(true);
  const closeIdentifyModal = () => setIsModalVisible(false);

  return (
    <>
      <View style={styles.tabContainer}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;

          const icons = {
            Home: isFocused ? "home" : "home-outline",
            Collection: isFocused ? "layers" : "layers-outline",
            Add: "add",
            Explore: isFocused ? "compass" : "compass-outline",
            Settings: isFocused ? "settings" : "settings-outline",
          };

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          // 🔵 Handle Add Button
          if (route.name === "Add") {
            return (
              <TouchableOpacity
                key={route.key}
                onPress={openIdentifyModal}
                activeOpacity={0.9}
                style={styles.addButtonContainer}>
                <LinearGradient
                  colors={["#87CEEB", "#38BAEF"]}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={styles.addButton}>
                  <Icon name="add" size={30} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
            );
          }

          // ⚪ Regular tabs
          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              onPress={onPress}
              activeOpacity={0.8}
              style={styles.tabButton}>
              <Icon
                name={icons[route.name]}
                size={RFValue(20)}
                color={isFocused ? "#00ADEF" : "#8E9BAE"}
              />
              <Text
                variant="small"
                style={{
                  marginTop: 4,
                  color: isFocused ? "#00ADEF" : "#8E9BAE",
                }}>
                {route.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* ✅ Identify Modal */}
      <AdaptiveModal
        visible={isModalVisible}
        onClose={closeIdentifyModal}
        title="Choose how to identify">
        <Pressable
          style={styles.optionButton}
          onPress={() => {
            closeIdentifyModal();
            navigation.navigate("IdentifyByPhoto"); // Replace with your actual screen name
          }}>
          <Icon name="image-outline" size={22} color="#333" />
          <Text variant="medium" style={styles.optionText}>
            Identify by Photo
          </Text>
        </Pressable>

        <Pressable
          style={styles.optionButton}
          onPress={() => {
            closeIdentifyModal();
            navigation.navigate("IdentifyBySound"); // Replace with your actual screen name
          }}>
          <Icon name="mic-outline" size={22} color="#333" />
          <Text variant="medium" style={styles.optionText}>
            Identify by Sound
          </Text>
        </Pressable>
      </AdaptiveModal>
    </>
  );
};

export default Tab;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    height: RFValue(70),
    borderTopWidth: 0,
    justifyContent: "space-around",
    alignItems: "center",
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: -2},
    shadowRadius: 8,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonContainer: {
    position: "relative",
    bottom: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  addButton: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#38BAEF",
    shadowOpacity: 0.4,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 6,
    elevation: 6,
  },
  // ✅ Modal Styles
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalBackground: {
    flex: 1,
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
    maxHeight: "80%",
  },
  modalHandle: {
    width: 50,
    height: 4,
    backgroundColor: "#ccc",
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 10,
  },
  modalTitle: {
    textAlign: "left",
    marginBottom: 20,
    fontSize: RFValue(14),
    fontWeight: "500",
    color: "#000",
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F1F1",
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
  },
  optionText: {
    marginLeft: 12,
    color: "#333",
  },
});
