import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MapPinned } from "lucide-react-native";
import { COLORS, SHADOWS } from "../../constants";
import SearchBar from "../../components/search/Search";
import SelectCommodity from "../../components/selectcommodity/SelectCommodity";

const CompareSearchBar = ({
  selectedLocation1,
  setSelectedLocation1,
  selectedLocation2,
  setSelectedLocation2,
}) => {
  return (
    <View style={styles.wrapper}>
      <SearchBar
        selectedLocation={selectedLocation1}
        setSelectedLocation={setSelectedLocation1}
      />
      <SearchBar
        selectedLocation={selectedLocation2}
        setSelectedLocation={setSelectedLocation2}
      />
    </View>
  );
};


export default CompareSearchBar;

const styles = StyleSheet.create({
  wrapper: {
    gap: 12,
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  searchbar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    ...SHADOWS.small,
    marginVertical: 10,
    height:60,
    width: "100%",
    maxWidth: 370,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: COLORS.primary,
  },
});
