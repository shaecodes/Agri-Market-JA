import React from "react";
import { View, FlatList, Image, StyleSheet, Dimensions } from "react-native";
import images from "../../constants/images";

const { width } = Dimensions.get("window");

const ITEM_WIDTH = width * 0.9;

const items = [
  { id: "1", image: images.market1 },
  { id: "2", image: images.market2 },
  { id: "3", image: images.market3 },
];

const Carousel = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={true}
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image source={item.image} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
  },
  container: {
    width: ITEM_WIDTH,
    height: 200,
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
    resizeMode: "cover",
  },
});