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
import {Button, ScrollView, Text, TextInput} from "~components/Common";
import Header from "~components/Header";

export default function EditProfileScreen() {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState("Robert Fox");
  const [email, setEmail] = useState("robertfox@birdbrain.com");
  const [dob, setDob] = useState("01 Jan 1997");
  const [address, setAddress] = useState("1601 Thornridge, Hong Kong");

  return (
    <View style={styles.container}>
      <Header
        title={"Edit Profile"}
        showBack
        onBack={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 20,
        }}>
        <View style={{flex: 1, justifyContent: "space-between"}}>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#e7f5fb",
                borderWidth: 1,
                borderColor: "#0000001A",
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
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 30,
                  }}>
                  <Image
                    source={{uri: "https://picsum.photos/seed/bird1/200"}}
                    style={{width: 50, height: 50, borderRadius: 25}}
                    resizeMode="center"
                  />
                  <View
                    style={{
                      backgroundColor: "#87CEEB",
                      borderWidth: 1,
                      borderColor: "#fff",
                      padding: 1,
                      position: "absolute",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 30,
                      bottom: 0,
                      right: 0,
                    }}>
                    <Icon name="add" color={"#fff"} size={15} />
                  </View>
                </View>
                <View>
                  <Text style={{fontWeight: "600"}}>Robert Fox</Text>
                </View>
              </View>
              <Icon name="chevron-forward" size={25} />
            </View>

            <View
              style={{
                backgroundColor: "#fff",
                padding: 10,
                borderRadius: 20,
                gap: 10,
                marginBottom: 20,
              }}>
              <TextInput
                label="Full Name"
                value={fullName}
                onChangeText={setFullName}
                placeholder="Enter your full name"
              />
              <TextInput
                label="Email Address"
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
              />
              <TextInput
                label="Date of Birth"
                value={dob}
                onChangeText={setDob}
                placeholder="Enter your Date of Birth"
                dob
              />
              <TextInput
                label="Your Location"
                value={address}
                onChangeText={setAddress}
                placeholder="Enter your location"
              />
            </View>
          </View>

          <View style={{justifyContent: "flex-end", marginBottom: 20}}>
            <Button
              title="Save"
              onPress={() => navigation.navigate("VerifyEmail")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: "#fff"},
});
