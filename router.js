import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import PostsScreen from "./Screens/PostsScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const MainTab = createBottomTabNavigator();
const AuthStack = createNativeStackNavigator();

const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator>
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: "Posts",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="view-grid-outline"
              color={color}
              size={size}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name="logout"
              color={"#BDBDBD"}
              size={32}
              marginRight={10}
              onPress={() => alert("This is a logout!")}
            />
          ),
          headerTitleStyle: {
            fontWeight: "medium",
            fontSize: 17,
            marginLeft: 140,
          },
        }}
      />
      <MainTab.Screen
        name="Create post"
        component={CreatePostsScreen}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: "Create",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={color} size={size} />
          ),
          headerLeft: () => (
            <MaterialCommunityIcons
              name="arrow-left"
              color={"#212121"}
              size={32}
              marginLeft={16}
              marginRight={58}
              onPress={() => alert("Go back!")}
            />
          ),
          headerTitleStyle: {
            fontWeight: "medium",
            fontSize: 17,
          },
          headerStyle: {
            borderBottomWidth: 1,
          },
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

export default useRoute;
