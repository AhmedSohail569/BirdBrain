import {createStackNavigator} from "@react-navigation/stack";

import HomeScreen from "~screens/home";

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
