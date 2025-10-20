import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CustomTabBar from "~components/CustomTabBar";

import {
  HomeStackNavigator,
  CollectionStackNavigator,
  IdentifyStackNavigator,
  ExploreStackNavigator,
  SettingsStackNavigator,
} from "./StackNavigator";

const Tab = createBottomTabNavigator();

// ✅ Define this outside so it’s stable across renders
const renderCustomTabBar = props => <CustomTabBar {...props} />;

export default function BottomTabs() {
  return (
    <Tab.Navigator
      tabBar={renderCustomTabBar}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Collection" component={CollectionStackNavigator} />
      <Tab.Screen name="Identify" component={IdentifyStackNavigator} />
      <Tab.Screen name="Explore" component={ExploreStackNavigator} />
      <Tab.Screen name="Settings" component={SettingsStackNavigator} />
    </Tab.Navigator>
  );
}
