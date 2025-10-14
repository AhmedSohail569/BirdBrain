import {View, StyleSheet, Image, ImageBackground} from "react-native";
import PropTypes from "prop-types";

import {Images} from "../../assets";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/AntDesign";
import {Button, Text} from "../../components/Common";
import Header from "~components/Header";

const GetStartedScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header variant="home" />
      <View style={styles.content}>
        <View style={styles.header}>
          <ImageBackground
            source={Images.GetStartedBackground}
            style={{
              width: RFPercentage(80),
              height: RFPercentage(60),
              justifyContent: "flex-end",
              alignItems: "center",
            }}
            resizeMode="contain">
            <Image source={Images.GetStartedLogo} resizeMode="contain" />
          </ImageBackground>
        </View>

        <Button
          title="Login"
          //   onPress={() => onLogin(email, password)}
          onPress={() => navigation.navigate("Login")}
          style={styles.loginButton}
        />

        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialButtons}>
          <View style={styles.socialButton}>
            <Icon name="apple1" size={20} color="#000" />
            <Text variant="caption">Log in with Apple</Text>
          </View>
          <View style={styles.socialButton}>
            <Icon name="google" size={20} color="#000" />
            <Text variant="caption">Log in with Google</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

GetStartedScreen.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FCFF",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    alignItems: "center",
    marginVertical: 40,
  },

  loginButton: {
    marginBottom: 24,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  orText: {
    marginHorizontal: 16,
    color: "#666",
    fontSize: 14,
  },
  socialButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: RFValue(20),
  },
  socialButton: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    paddingVertical: RFValue(10),
    alignItems: "center",
  },
});

export default GetStartedScreen;
