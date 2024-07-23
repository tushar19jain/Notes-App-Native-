import { View, Text } from "react-native";
import React from "react";

export default function AppSettings() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 8,
        elevation: 2,
        padding: 15,
        display: "flex",
        gap: 20,
        paddingTop:90,
        height:900
      }}
    >
      <Text style={{fontSize:20,fontFamily:"pop-bold"}}>Settings</Text>
      <View style={{ backgroundColor: "darkgrey", height: 1 }}></View>
      <Text style={{ fontSize: 15 , fontFamily:'pop-regular' }}>About Notes </Text>
      <View style={{ backgroundColor: "lightgrey", height: 1, opacity: 1 }}></View>
      <Text style={{ fontSize: 15, fontFamily:'pop-regular' }}>Privacy </Text>
      <View style={{ backgroundColor: "lightgrey", height: 1, opacity: 1 }}></View> 
      <Text style={{ fontSize: 15, fontFamily:'pop-regular' }}>Developers </Text>
      <View style={{ backgroundColor: "lightgrey", height: 1, opacity: 1 }}></View> 
      <Text style={{ fontSize: 15 , fontFamily:'pop-regular' }}>Contributions </Text>
      <View style={{ backgroundColor: "lightgrey", height: 1, opacity: 1 }}></View> 
      </View>
  );
}
