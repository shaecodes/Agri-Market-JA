 import React, { useState } from "react";
import { StyleSheet ,} from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { COLORS, SIZES, SHADOWS } from "../../constants";

const locations = [
  { id: "1", name: "PAPINE Market" },
  { id: "2", name: "CORONATION Market" },
  { id: "3", name: "CROSS ROADS Market" },
  { id: "4", name: "CROSS ROADS Sampars" },
  { id: "5", name: "CROSS ROADS Hi-Lo" },
  { id: "6", name: "WATERLOO ROAD Mega Mart" },
  { id: "7", name: "NEW KINGSTON John R Wong" },
  { id: "8", name: "HALF-WAY TREE Brooklyn" },
  { id: "9", name: "WASHINGTON BOULEVARD Shopper's Fair" },
  { id: "10", name: "DUHANEY PARK Shopper's Fair" },
  { id: "11", name: "LIGUANEA General Foods" },
  { id: "12", name: "LIGUANEA Shopper's Fair" },
  { id: "13", name: "BARBICAN ROAD Loshusan" },
  { id: "14", name: "BARBICAN ROAD Hi-Lo" },
  { id: "15", name: "CONSTANT SPRING Hi-Lo" },
  { id: "16", name: "CONSTANT SPRING Select Grocers" },
  { id: "17", name: "HARBOUR VIEW Shopper's Fair" },
  { id: "18", name: "RED HILLS ROAD Lee's Food Fair" },
  { id: "19", name: "RED HILLS ROAD Price Smart" },
  { id: "20", name: "PORTMORE Progressive Foods" },
  { id: "21", name: "PORTMORE Mega Mart" },
  { id: "22", name: "PORTMORE Joong" },
  { id: "23", name: "PORTMORE Hi-Lo" },
];


const SearchBar = ({ selectedLocation, setSelectedLocation }) => {
  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={locations}
      maxHeight={300}
      labelField="name"
      valueField="id"
      placeholder="Select A Location"
      value={selectedLocation}
      onChange={item => {
        setSelectedLocation(item);
      }}
    />
  );
};


export default SearchBar;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    width: "100%",
    maxWidth: 370,
    borderRadius: 10,
    ...SHADOWS.small,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: COLORS.white,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});