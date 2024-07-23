import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { useSelector } from "react-redux";
import NotesBody from "./../../components/NotesBody";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  const [notes, setNotes] = useState([]);
  const notesData = useSelector((state) => state.notesReducer);
  const [searchClicked, setSearchClicked] = useState(false);
  const [searchData,setSearchData] = useState(" ")
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    setNotes(notesData);
  });
  return (
    <SafeAreaView style={{ display: "flex" }}>
      {searchClicked ? (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 25,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <TextInput
              style={{
                backgroundColor: "lightgrey",
                padding: 8,
                borderRadius: 99,
                width: 240,
              }}
              onChangeText={(value)=> setSearchData(value)}
              autoFocus={true}
              placeholder="Search notes"
              onSubmitEditing={()=> router.push('/searched') }
            ></TextInput>
          </View>
          <TouchableOpacity
            onPress={() => {
              setSearchClicked(false);
            }}
          >
            <Text style={{ color: "#e1ad01", fontWeight: "500", fontSize: 17 }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: 20,
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 25,
          }}
        >
          <Ionicons
            onPress={() => {
              setSearchClicked(true);
            }}
            name="search"
            size={24}
            color="black"
          />
        </View>
      )}
      <View style={{ padding: 30 }}>
        <Text style={{ fontSize: 35, fontFamily:'pop-bold' }}>All notes</Text>
      </View>
      <View>
        <FlatList
          data={notes}
          renderItem={({ item }) => (
            <NotesBody
              heading={item.heading}
              description={item.description}
              date={item.date}
              month={item.month}
              year={item.year}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
