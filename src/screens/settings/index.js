import {useNavigation} from "@react-navigation/native";
import React, {useState} from "react";
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {Switch} from "react-native-paper";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/Ionicons";
import {Button, ScrollView, Text} from "~components/Common";
import Header from "~components/Header";

export default function SettingsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header title={"Settings"} />
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#e7f5fb",
            padding: 20,
            borderRadius: 30,
            marginVertical: RFValue(20),
          }}>
          <View
            style={{
              gap: 10,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <View
              style={{
                backgroundColor: "#87CEEB",
                padding: 15,

                alignItems: "center",
                justifyContent: "center",
                borderRadius: 30,
              }}>
              <Icon name="ribbon-outline" color={"#fff"} size={25} />
            </View>
            <View>
              <Text style={{fontWeight: "600"}}>My Subscription</Text>
              <Text style={{fontWeight: "300"}}>Free</Text>
            </View>
          </View>
          <Button
            title={"Upgrade Now"}
            style={{
              paddingHorizontal: RFValue(12),
              paddingVertical: RFValue(10),
              borderRadius: 10,
              left: 5,
            }}
          />
        </View>

        <View
          style={{
            backgroundColor: "#F7F6F9",
            padding: 10,
            borderRadius: 20,
            gap: 10,
            marginBottom: 20,
          }}>
          <Button
            variant="section"
            title={"Edit Profile"}
            left={
              <View
                style={{
                  padding: 12,
                  backgroundColor: "#F1F1F1",
                  borderRadius: 24,
                }}>
                <Icon name="person-circle-outline" size={20} />
              </View>
            }
            right={<Icon name="chevron-forward" size={20} />}
            onPress={() => navigation.navigate("EditProfileScreen")}
          />
          <Button
            variant="section"
            title={"Set Language"}
            subText={"English"}
            left={
              <View
                style={{
                  padding: 12,
                  backgroundColor: "#F1F1F1",
                  borderRadius: 24,
                }}>
                <Icon name="language" size={20} />
              </View>
            }
            right={<Icon name="chevron-forward" size={20} />}
          />
          <Button
            variant="section"
            title={"AutoSave Photos to Album"}
            subText={
              "All of your bird photos are automatically saved to your album"
            }
            left={
              <View
                style={{
                  padding: 12,
                  backgroundColor: "#F1F1F1",
                  borderRadius: 24,
                }}>
                <Icon name="sync-outline" size={20} />
              </View>
            }
            right={<Switch />}
          />
        </View>

        <View
          style={{
            backgroundColor: "#F7F6F9",
            padding: 10,
            borderRadius: 20,
            gap: 10,
            marginBottom: 10,
          }}>
          <Button
            variant="section"
            title={"Terms & Conditions"}
            left={
              <View
                style={{
                  padding: 12,
                  backgroundColor: "#F1F1F1",
                  borderRadius: 24,
                }}>
                <Icon name="document-text-outline" size={20} />
              </View>
            }
            right={<Icon name="chevron-forward" size={20} />}
          />
          <Button
            variant="section"
            title={"Privacy Policy"}
            left={
              <View
                style={{
                  padding: 12,
                  backgroundColor: "#F1F1F1",
                  borderRadius: 24,
                }}>
                <Icon name="shield-checkmark-outline" size={20} />
              </View>
            }
            right={<Icon name="chevron-forward" size={20} />}
          />
          <Button
            variant="section"
            title={"Help & FAQs"}
            left={
              <View
                style={{
                  padding: 12,
                  backgroundColor: "#F1F1F1",
                  borderRadius: 24,
                }}>
                <Icon name="headset-outline" size={20} />
              </View>
            }
            right={<Icon name="chevron-forward" size={20} />}
          />
          <Button
            variant="section"
            title={"App Info"}
            left={
              <View
                style={{
                  padding: 12,
                  backgroundColor: "#F1F1F1",
                  borderRadius: 24,
                }}>
                <Icon name="information-circle-outline" size={20} />
              </View>
            }
            right={<Icon name="chevron-forward" size={20} />}
          />
          <Button
            variant="section"
            title={"Share with Friends"}
            left={
              <View
                style={{
                  padding: 12,
                  backgroundColor: "#F1F1F1",
                  borderRadius: 24,
                }}>
                <Icon name="share-social-outline" size={20} />
              </View>
            }
            right={<Icon name="chevron-forward" size={20} />}
          />
          <Button
            variant="section"
            title={"Suggestion"}
            subText={
              "If you have any ideas or suggestions, please share them with us"
            }
            left={
              <View
                style={{
                  padding: 12,
                  backgroundColor: "#F1F1F1",
                  borderRadius: 24,
                }}>
                <Icon name="bulb-outline" size={20} />
              </View>
            }
            right={<Icon name="chevron-forward" size={20} />}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: "#fff"},
});
