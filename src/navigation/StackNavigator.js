import {createStackNavigator} from "@react-navigation/stack";

import HomeScreen from "~screens/home";
import CollectionScreen from "~screens/collection";

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const CollectionStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CollectionScreen"
        component={CollectionScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const AddStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const ExploreStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

// export const ProfileStackNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="ProfileScreen"
//         component={ProfileScreen}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   );
// };
