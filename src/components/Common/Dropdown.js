import React, {useState} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Modal,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {RFValue} from "react-native-responsive-fontsize";

const COLORS = {
  bg: "#fff",
  border: "#E6E6E6",
  text: "#1a1a1a",
  accent: "#38BAEF",
  gray: "#8a8a8a",
};

export default function CustomDropdown({
  label,
  selected,
  onSelect,
  options,
  renderOption, // allows custom rendering (image grid etc)
}) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={styles.dropdownHeader}
        activeOpacity={0.7}
        onPress={() => setVisible(true)}>
        <Text style={styles.dropdownLabel}>{label}</Text>
        <View style={styles.selectionRow}>
          <Text style={styles.dropdownValue}>{selected?.label || "All"}</Text>
          <Icon
            name={visible ? "chevron-up" : "chevron-down"}
            size={18}
            color={COLORS.text}
          />
        </View>
      </TouchableOpacity>

      <Modal
        visible={visible}
        animationType="slide"
        transparent={false}
        onRequestClose={() => setVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>
              {label} / All {label.toLowerCase()}s
            </Text>
            <Pressable onPress={() => setVisible(false)}>
              <Icon name="close" size={24} color={COLORS.text} />
            </Pressable>
          </View>

          <FlatList
            data={options}
            keyExtractor={item => item.id.toString()}
            numColumns={3}
            contentContainerStyle={{paddingVertical: 20}}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.optionItem}
                onPress={() => {
                  onSelect(item);
                  setVisible(false);
                }}>
                {renderOption ? (
                  renderOption(item)
                ) : (
                  <>
                    <Image
                      source={{uri: item.image}}
                      style={styles.optionImage}
                    />
                    <Text style={styles.optionText}>{item.label}</Text>
                  </>
                )}
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  dropdownHeader: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    padding: 12,
    backgroundColor: COLORS.bg,
    // flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginHorizontal: 5,
    gap: 5,
  },
  dropdownLabel: {
    // position: "absolute",
    // top: -10,
    // left: 12,
    backgroundColor: COLORS.bg,
    fontSize: 12,
    color: COLORS.gray,
  },
  selectionRow: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 6,
  },
  dropdownValue: {fontSize: 14, color: COLORS.text, fontWeight: "500"},
  modalContainer: {flex: 1, backgroundColor: COLORS.bg, paddingHorizontal: 16},
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.text,
  },
  optionItem: {
    flex: 1 / 3,
    alignItems: "center",
    marginVertical: 12,
  },
  optionImage: {width: 60, height: 60, borderRadius: 30, marginBottom: 8},
  optionText: {fontSize: RFValue(12), textAlign: "center"},
});
