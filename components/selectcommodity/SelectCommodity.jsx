import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { COLORS, SHADOWS } from "../../constants";
import images from "../../constants/images";

const commodities = [
  { id: '0', name: 'Broccoli Imported', image: images.broccoli },
  { id: '1', name: 'Cabbage (Green) Local', image: images.cabbage_green },
  { id: '2', name: 'Cabbage (Red) Imported', image: images.cabbage_red },
  { id: '3', name: 'Callaloo Shredded', image: images.callaloo_shredded },
  { id: '4', name: 'Callaloo Whole', image: images.callaloo_whole },
  { id: '5', name: 'Cantaloupe Local', image: images.cantaloupe },
  { id: '6', name: 'Carrot Local', image: images.carrot },
  { id: '7', name: 'Cauliflower Local', image: images.cauliflower_local },
  { id: '8', name: 'Cauliflower Imported', image: images.cauliflower_imported },
  { id: '9', name: 'Coco Local', image: images.coco },
  { id: '10', name: 'Cucumber Local', image: images.cucumber },
  { id: '11', name: 'Dasheen Local', image: images.dasheen },
  { id: '12', name: 'Escallion Local', image: images.escallion },
  { id: '13', name: 'Ginger Local', image: images.ginger },
  { id: '14', name: 'Green Banana Local', image: images.green_banana },
  { id: '15', name: 'Gungo Peas Dry', image: images.gungo_peas },
  { id: '16', name: 'Honeydew Melon Local', image: images.honeydew },
  { id: '17', name: 'Irish Potato Local', image: images.irish_potato },
  { id: '18', name: 'Lettuce Iceberg (Local)', image: images.lettuce_iceberg },
  { id: '19', name: 'Lettuce Romaine (Local)', image: images.lettuce_romaine },
  { id: '20', name: 'Okra Local', image: images.okra },
  { id: '21', name: 'Onion Local', image: images.onion_local },
  { id: '22', name: 'Onion Imported', image: images.onion_imported },
  { id: '23', name: 'Pak Choi Local', image: images.pak_choi },
  { id: '24', name: 'Papaya Local', image: images.papaya },
  { id: '25', name: 'Pepper (Hot) Scotch Bonnet', image: images.pepper_scotch_bonnet },
  { id: '26', name: 'Pepper (Hot) West Indian Red', image: images.pepper_west_indian_red },
  { id: '27', name: 'Pineapple Cow Boy', image: images.pineapple_cowboy },
  { id: '28', name: 'Pineapple MD 2', image: images.pineapple_md2 },
  { id: '29', name: 'Plantain Ripe', image: images.plantain_ripe },
  { id: '30', name: 'Plantain Green', image: images.plantain_green },
  { id: '31', name: 'Pumpkin Local', image: images.pumpkin },
  { id: '32', name: 'String Bean Local', image: images.string_bean },
  { id: '33', name: 'Sweet Pepper (Green) Local', image: images.bell_pepper_green },
  { id: '34', name: 'Sweet Pepper (Red) Local', image: images.bell_pepper_red },
  { id: '35', name: 'Sweet Pepper (Yellow) Local', image: images.bell_pepper_yellow },
  { id: '36', name: 'Sweet Potato Local', image: images.sweet_potato },
  { id: '37', name: 'Thyme Local', image: images.thyme },
  { id: '38', name: 'Tomatoes(Plummy) Local', image: images.tomatoes_plummy },
  { id: '39', name: 'Tomatoes(Salad) Local', image: images.tomatoes_salad },
  { id: '40', name: 'Turmeric Local', image: images.turmeric },
  { id: '41', name: 'Watermelon Local', image: images.watermelon },
  { id: '42', name: 'Yam Yellow', image: images.yam_yellow },
  { id: '43', name: 'Yam Negro', image: images.yam_negro },
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
    ...SHADOWS.medium,
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
