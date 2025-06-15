import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { COLORS, SHADOWS } from "../../constants";
import images from "../../constants/images";

const commodities = [
  { id: '1', name: 'Broccoli (Imported)', image: images.broccoli },
  { id: '2', name: 'Cabbage (Green)', image: images.cabbage_green },
  { id: '3', name: 'Cabbage (Red)', image: images.cabbage_red },
  { id: '4', name: 'Callaloo (Shredded)', image: images.callaloo_shredded },
  { id: '5', name: 'Callaloo (Whole)', image: images.callaloo_whole },
  { id: '6', name: 'Cantaloupe', image: images.cantaloupe },
  { id: '7', name: 'Carrot', image: images.carrot },
  { id: '8', name: 'Cauliflower (Imported)', image: images.cauliflower_imported },
  { id: '9', name: 'Cauliflower (Local)', image: images.cauliflower_local },
  { id: '10', name: 'Coco', image: images.coco },
  { id: '11', name: 'Cucumber', image: images.cucumber },
  { id: '12', name: 'Dasheen', image: images.dasheen },
  { id: '13', name: 'Escallion', image: images.escallion },
  { id: '14', name: 'Ginger', image: images.ginger },
  { id: '15', name: 'Green Banana', image: images.green_banana },
  { id: '16', name: 'Gungo Peas (Dry)', image: images.gungo_peas },
  { id: '17', name: 'Honeydew Melon', image: images.honeydew },
  { id: '18', name: 'Irish Potato', image: images.irish_potato },
  { id: '19', name: 'Lettuce (Iceberg)', image: images.lettuce_iceberg },
  { id: '20', name: 'Lettuce (Romaine)', image: images.lettuce_romaine },
  { id: '21', name: 'Okra', image: images.okra },
  { id: '22', name: 'Onion (Imported)', image: images.onion_imported },
  { id: '23', name: 'Onion (Local)', image: images.onion_local },
  { id: '24', name: 'Pak Choi', image: images.pak_choi },
  { id: '25', name: 'Papaya', image: images.papaya },
  { id: '26', name: 'Pepper (Scotch Bonnet)', image: images.pepper_scotch_bonnet },
  { id: '27', name: 'Pepper (West Indian Red)', image: images.pepper_west_indian_red },
  { id: '28', name: 'Pineapple (Cow Boy)', image: images.pineapple_cowboy },
  { id: '29', name: 'Pineapple (MD 2)', image: images.pineapple_md2 },
  { id: '30', name: 'Plantain (Green)', image: images.plantain_green },
  { id: '31', name: 'Plantain (Ripe)', image: images.plantain_ripe },
  { id: '32', name: 'Pumpkin', image: images.pumpkin },
  { id: '33', name: 'String Bean', image: images.string_bean },
  { id: '34', name: 'Sweet Pepper (Green)', image: images.bell_pepper_green },
  { id: '35', name: 'Sweet Pepper (Red)', image: images.bell_pepper_red },
  { id: '36', name: 'Sweet Pepper (Yellow)', image: images.bell_pepper_yellow },
  { id: '37', name: 'Sweet Potato', image: images.sweet_potato },
  { id: '38', name: 'Thyme', image: images.thyme },
  { id: '39', name: 'Tomatoes (Plummy)', image: images.tomatoes_plummy },
  { id: '40', name: 'Tomatoes (Salad)', image: images.tomatoes_salad },
  { id: '41', name: 'Turmeric', image: images.turmeric },
  { id: '42', name: 'Watermelon', image: images.watermelon },
  { id: '43', name: 'Yam (Negro)', image: images.yam_negro },
  { id: '44', name: 'Yam (Yellow)', image: images.yam_yellow },
];


const SelectCommodity = ({ selectedCommodity, setSelectedCommodity }) => {
  const renderItem = ({ item }) => (
  <TouchableOpacity
    style={[
      styles.commodityCard,
      selectedCommodity?.id === item.id && styles.selectedCard
    ]}
    onPress={() => setSelectedCommodity(item)}
  >
    <Image source={item.image} style={styles.commodityImage} />
    <Text style={styles.commodityName}>{item.name}</Text>
  </TouchableOpacity>
);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Commodity</Text>
      <FlatList
        data={commodities}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.carousel}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: "100%",
    maxWidth: 400,
    height: 220,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    marginBottom: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
    color: "#333",
  },
  carousel: {
    gap: 12,
  },
  commodityCard: {
    width: 120,
    height: 150,
    borderRadius: 24,
    backgroundColor: "#E6F2E6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    padding: 8,
  },
  selectedCard: {
    backgroundColor: "#C1E1C1",
    borderWidth: 2,
    borderColor: "#4CAF50",
  },
  commodityImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 6,
  },
  commodityName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
});

export default SelectCommodity;
