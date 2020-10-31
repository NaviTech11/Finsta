import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createStackNavigator();

const MessagesNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);

export default MessagesNavigator;