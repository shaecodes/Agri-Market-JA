import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import images  from "../constants/images"; 
import { COLORS, SIZES } from "../constants";
import PriceCard from "../components/prices/Prices";
import SearchBar from "../components/search/Search";
import Carousel from "../components/carousel/Carousel";
import SelectCommodity from "../components/selectcommodity/SelectCommodity";
import priceData from "../data/agriculture_data_april_12_25.json";

const Trends = () => {
  const [selectedCommodity, setSelectedCommodity] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [matchedPrice, setMatchedPrice] = useState(null);

  const handleButtonPress = () => {
      const match = priceData.find(
        item =>
          item.Commodity === selectedCommodity.name &&
          item.Market === selectedLocation.name
      );

      if (match && match.Price !== null) {
        setMatchedPrice(match.Price);
      } else {
        setMatchedPrice(0);
      }

      setShowResults(true);
    };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Agri-Market JA</Text>
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
            name={selectedCommodity.name}
            locationName={selectedLocation.name}
            price={matchedPrice}
          />
        </>
      )}      
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
  }
});
