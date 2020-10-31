import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PostsScreen from "../screens/PostsScreen";


const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name="Posts" component={PostsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
