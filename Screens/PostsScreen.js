import React from "react";
import { moduleName } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DefaultScreen from "./DefaultScreen";
import CommentsScreen from "./CommentsScreen";
import MapScreen from "./MapScreen";

// const NestedScreen = createStackNavigator();
const NestedScreen = createNativeStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="Default"
        component={DefaultScreen}
        options={{ headerShown: false }}
      />
      <NestedScreen.Screen
        name="Comments"
        component={CommentsScreen}
        options={{ headerShown: false }}
      />
      <NestedScreen.Screen
        name="Map"
        component={MapScreen}
        options={{ headerShown: false }}
      />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
