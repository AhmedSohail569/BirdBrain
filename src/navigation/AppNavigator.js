import {createNativeStackNavigator} from "@react-navigation/native-stack";

import TabNavigator from "./TabNavigator";
import SearchScreen from "~screens/search";
import ByPhotoScreen from "~screens/identify/ByPhotoScreen";
import SnapTipsScreen from "~screens/identify/SnapTips";
import ByVoiceScreen from "~screens/identify/ByVoiceScreen";
import AnalysisReportScreen from "~screens/collection/AnalysisReportScreen";
import ByFilteringScreen from "~screens/identify/ByFilteringScreen";
import EditProfileScreen from "~screens/settings/EditProfile";

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="AppTabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IdentifyByPhotoScreen"
        component={ByPhotoScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SnapTipsScreen"
        component={SnapTipsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IdentifyByVoiceScreen"
        component={ByVoiceScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IdentifyByFilteringScreen"
        component={ByFilteringScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AnalysisReportScreen"
        component={AnalysisReportScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
