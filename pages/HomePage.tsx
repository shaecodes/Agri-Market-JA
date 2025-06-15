import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import PriceCard from "../components/prices/Prices";
import images from "../constants/images";
import NativeMap from "../components/map/Map";
import { COLORS, SIZES } from "../constants";
import SearchBar from "../components/search/Search";
import Carousel from "../components/carousel/Carousel";
import SelectCommodity from "../components/selectcommodity/SelectCommodity";

const HomePage = () => {
  const [selectedCommodity, setSelectedCommodity] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showPrices, setShowPrices] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleButtonPress = () => {
    console.log("Do Action for:", selectedCommodity, selectedLocation);
    setShowResults(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Agri-Market JA</Text>
      <Carousel />
      <SelectCommodity
        selectedCommodity={selectedCommodity}
        setSelectedCommodity={setSelectedCommodity}
      />
      <SearchBar
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />

      {selectedCommodity && selectedLocation && (
        <TouchableOpacity style={styles.actionButton} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>See Prices</Text>
        </TouchableOpacity>
      )}

      {showResults && (
        <>
          <PriceCard
            imageUrl={selectedCommodity.image}
            name = {selectedCommodity.name}
            locationName={selectedLocation.name}
            price={550}
          />

        </>
      )}
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
    paddingBottom: 200,
  },
  title: {
    fontSize: SIZES.large,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 30,
  },
  actionButton: {
    marginTop: 20,
    paddingVertical: 14,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    borderRadius: 36,
    width: 300,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
});
