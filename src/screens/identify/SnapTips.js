import React, {useState} from "react";
import {View, StyleSheet, Image} from "react-native";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import {Button, Text, TextInput} from "../../components/Common";
import {RFValue} from "react-native-responsive-fontsize";
import {Images} from "~assets";

const SnapTipsScreen = ({navigation}) => {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Header
        variant="default"
        title={"Snap Tips"}
        showBack
        onBack={() => navigation.goBack()}
      />

      <View style={styles.content}>
        <View style={{alignItems: "center"}}>
          <Image source={Images.snapTip1} />
          <Text align="center" variant="body" style={{fontWeight: "500"}}>
            Tips: Snap the full bird clearly.
          </Text>
        </View>
        <View style={{gap: RFValue(20)}}>
          <Image source={Images.snapTip2} />
          <Image source={Images.snapTip3} />
        </View>
        <Button title="Got it!" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

SnapTipsScreen.propTypes = {
  onBack: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5F6FE",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: RFValue(30),
    backgroundColor: "#FFFFFF",
    justifyContent: "space-around",
  },
});

export default SnapTipsScreen;
