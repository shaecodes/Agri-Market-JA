import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MapPinned } from "lucide-react-native";
import { COLORS, SHADOWS } from "../../constants";

const CompareSearchBar = () => {
  const [location1, setLocation1] = useState("");
  const [location2, setLocation2] = useState("");

  return (
    <View style={styles.wrapper}>
      <View style={styles.searchbar}>
        <MapPinned color={COLORS.primary} size={20} style={styles.icon} />
        <TextInput
          placeholder="Search Location 1"
          placeholderTextColor="#999"
          style={styles.input}
          value={location1}
          onChangeText={setLocation1}
        />
      </View>

      <View style={styles.searchbar}>
        <MapPinned color={COLORS.primary} size={20} style={styles.icon} />
        <TextInput
          placeholder="Search Location 2"
          placeholderTextColor="#999"
          style={styles.input}
          value={location2}
          onChangeText={setLocation2}
        />
      </View>
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
