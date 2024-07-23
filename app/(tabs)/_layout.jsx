import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
export default function Tablayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          headerShown: false,
          tabBarLabel: "Create",
          tabBarIcon: ({ color }) => (
            <Ionicons name="create-outline" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          headerShown: false,
          tabBarLabel: "Favourite",
          tabBarIcon: ({ color }) => (
            <AntDesign name="hearto" size={24} color="red" />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          headerShown: false,
          tabBarLabel: "Setting",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
