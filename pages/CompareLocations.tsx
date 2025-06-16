import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import PriceCard from "../components/prices/Prices";
import images  from "../constants/images"; 
import { COLORS, SIZES } from "../constants";
import SearchBar from "../components/search/Search";
import SelectCommodity from "../components/selectcommodity/SelectCommodity";
import CompareSearchBar from "../components/search/CompareSearch";
import priceData from "../data/agriculture_data.json";

const CompareLocations = () => {
  const [selectedCommodity, setSelectedCommodity] = useState(null);
  const [selectedLocation1, setSelectedLocation1] = useState(null);
  const [selectedLocation2, setSelectedLocation2] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [matchedPrice1, setMatchedPrice1] = useState(null);
  const [matchedPrice2, setMatchedPrice2] = useState(null);

  const handleButtonPress = () => {
    const match1 = priceData.find(
      item =>
        item.Commodity === selectedCommodity.name &&
        item.Market === selectedLocation1.name
    );

    if (match1 && match1.Price !== null) {
      setMatchedPrice1(match1.Price);
    } else {
      setMatchedPrice1(0);
    }

    const match2 = priceData.find(
      item =>
        item.Commodity === selectedCommodity.name &&
        item.Market === selectedLocation2.name
    );

    if (match2 && match2.Price !== null) {
      setMatchedPrice2(match2.Price);
    } else {
      setMatchedPrice2(0);
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

      <CompareSearchBar
        selectedLocation1={selectedLocation1}
        setSelectedLocation1={setSelectedLocation1}
        selectedLocation2={selectedLocation2}
        setSelectedLocation2={setSelectedLocation2}
      />

      {selectedCommodity && selectedLocation1 && selectedLocation2 && (
        <TouchableOpacity style={styles.actionButton} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>See Prices</Text>
        </TouchableOpacity>
      )}

      {showResults && (
        <>
          <PriceCard
            imageUrl={selectedCommodity.image}
            name={selectedCommodity.name}
            locationName={selectedLocation1.name}
            price={matchedPrice1}
          />
          <PriceCard
            imageUrl={selectedCommodity.image}
            name={selectedCommodity.name}
            locationName={selectedLocation2.name}
            price={matchedPrice2}
          />
        </>
      )}
    </ScrollView>
  );
};


export default CompareLocations;

const styles = StyleSheet.create({
    container: {
    paddingTop: 100,
    paddingBottom: 200,
    backgroundColor: COLORS.white,
    alignItems: "center",
  },

  blank_container:{
    backgroundColor: COLORS.white,
    marginBottom: 200,
    height: 200,
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
