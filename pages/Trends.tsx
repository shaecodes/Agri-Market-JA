import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import images  from "../constants/images"; 
import { COLORS, SIZES } from "../constants";
import SearchBar from "../components/search/Search";
import Carousel from "../components/carousel/Carousel";
import SelectCommodity from "../components/selectcommodity/SelectCommodity";

const Trends = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Agri-Market JA</Text>
      <SelectCommodity/>
      <SearchBar/>      
    </ScrollView>
  );
};

export default Trends;

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flexGrow: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
  },
  title: {
    fontSize: SIZES.large,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 20,
  },
});
