import { View, Text, SafeAreaView, ToastAndroid } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useState } from "react";
import { TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { addNotes } from "../../redux/actions/NotesAction";
import { TouchableOpacity } from "react-native";

export default function create() {
  const date = new Date();
  const dispatch = useDispatch();
  const todayDate = date.getDate();
  const currentMounth = date.getMonth();
  const currentYear = date.getFullYear();
  const [notesData, setNotesData] = useState({
    heading: "",
    description: "",
    date: todayDate,
    month: currentMounth,
    year: currentYear,
    favourite: null
  });
  const handleSave = (item) => {
    dispatch(addNotes(item));
  };
  return (
    <SafeAreaView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          paddingLeft: 20,
          paddingRight: 20,
          marginTop: 80,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "grey" }}>
          {todayDate}/{currentMounth}/{currentYear}
        </Text>
        <TouchableOpacity onPress={() => handleSave(notesData)}>
          <Ionicons name="save-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ margin: 20 }}>
        <TextInput
          onChangeText={(value) => {
            setNotesData({ ...notesData, heading: value });
          }}
          maxLength={30}
          style={{ padding: 10, fontSize: 18, fontWeight: "bold" }}
          placeholder="Heading"
        ></TextInput>
        <TextInput
          onChangeText={(value) => {
            setNotesData({ ...notesData, description: value });
          }}
          multiline={true}
          style={{ padding: 10, fontSize: 14, fontWeight: "regular" }}
          placeholder="Start typing here.."
        ></TextInput>
      </View>
    </SafeAreaView>
  );
}
