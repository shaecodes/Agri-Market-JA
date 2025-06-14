import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import PriceCard from "../components/prices/Prices";
import images  from "../constants/images"; 
import NativeMap from "../components/map/Map"
import { COLORS, SIZES } from "../constants";
import SearchBar from "../components/search/Search";
import Carousel from "../components/carousel/Carousel";
import SelectCommodity from "../components/selectcommodity/SelectCommodity";

const HomePage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Agri-Market JA</Text>
      <Carousel/>
      <SelectCommodity/>
      <SearchBar/>
      <PriceCard
        imageUrl={images.ginger}
        locationName="Coronation Market"
        highestPrice={550}
        lowestPrice={330}
      />
      <NativeMap/>
      
    </ScrollView>
  );
};

export default HomePage;

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
    marginBottom: 30,
  },
});
