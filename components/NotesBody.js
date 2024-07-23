import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { useDispatch } from "react-redux";
import { addToFav, deleteNotes, removeFromFav } from "../redux/actions/NotesAction";
import { useState } from "react";
export default function NotesBody({
  heading,
  description,
  date,
  month,
  year,
  favourite,
}) {
  const [fav, setFav] = useState(favourite);
  const dispatch = useDispatch();
  const handleLiked = (heading, description, date, month, year, fav) => {
    console.log(heading, description, date, month, year, fav);
    dispatch(addToFav({ heading, description, date, month, year, fav }));
  };
  const handleDeletion = (heading, description, date, month, year, fav) => {
    dispatch(deleteNotes(heading, description, date, month, year, fav));
  };
  const handleDisLiked=(heading)=>{
    dispatch(removeFromFav(heading))
  }
  return (
    <View
      style={{
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#fff",
        elevation: 5,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 15,
      }}
    >
      <Text
        style={{ fontWeight: "bold", fontSize: 16, fontFamily: "pop-bold" }}
      >
        {heading}
      </Text>
      <Text
        style={{
          fontWeight: "regular",
          fontSize: 14,
          fontFamily: "pop-regular",
        }}
      >
        {description}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          alignItems: "center",
        }}
      >
        {fav ? (
          <TouchableOpacity>
            <AntDesign 
            onPress={()=>{
              const newFav = !fav
              setFav(newFav)
              handleDisLiked(heading)
            }}
            name="heart" size={24} color="red" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <AntDesign
              onPress={() => {
                const newFav = !fav;
                setFav(newFav);
                handleLiked(heading, description, date, month, year, newFav);
              }}
              name="hearto"
              size={24}
              color="red"
            />
          </TouchableOpacity>
        )}
        <Text style={{ fontSize: 10, color: "gray" }}>
          Created on {date}/{month}/{year}
        </Text>
        <TouchableOpacity onPress={() => handleDeletion(heading)}>
          <AntDesign name="delete" size={24} color="darkred" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
