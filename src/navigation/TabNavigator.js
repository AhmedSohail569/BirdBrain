import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import {HomeStackNavigator} from "./StackNavigator";
import {TouchableOpacity} from "react-native";

const Tab = createBottomTabNavigator();

const renderTabBarIcon = (routeName, focused) => {
  const icons = {
    Home: "home-outline",
    Profile: "account-outline",
  };

  return <Icon name={icons[routeName]} size={25} color={"red"} />;
};

const screenOptions = ({route}) => ({
  animation: "fade",
  tabBarStyle: {
    height: 60,
    paddingVertical: 10,
    paddingBottom: 10,
    backgroundColor: "#fff",
    borderTopWidth: 0,
  },
  tabBarButton: props => <TouchableOpacity {...props} />,
  tabBarIcon: ({focused}) => renderTabBarIcon(route.name, focused),
  tabBarActiveTintColor: "#f1f1f1",
  tabBarInactiveTintColor: "#333",
});

export default () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{headerShown: false}}
      />

      {/* <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{headerShown: false}}
      /> */}
    </Tab.Navigator>
  );
};
