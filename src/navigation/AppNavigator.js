import {createNativeStackNavigator} from "@react-navigation/native-stack";

import TabNavigator from "./TabNavigator";
import SearchScreen from "~screens/search";

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
    </Stack.Navigator>
  );
};
