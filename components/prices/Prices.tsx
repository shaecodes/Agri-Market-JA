import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ArrowUpRight, ArrowDownRight } from "lucide-react-native"; // For mobile icons
import { COLORS, SHADOWS } from "../../constants";

interface PriceCardProps {
  imageUrl: any; 
  name: string;
  locationName: string;
  price: number;
}

const PriceCard: React.FC<PriceCardProps> = ({
  imageUrl,
  name,
  locationName,
  price,
}) => {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={imageUrl} style={styles.image} />
        <Text style={styles.title}>
          <Text style={styles.location}>{name}</Text> at <Text style={styles.location}>{locationName}</Text>
        </Text>
      </View>

      {/* Price Info */}
      <View style={styles.priceRow}>
        {/* Highest Price */}
        <View style={styles.priceBox}>
          <Text style={styles.label}>Highest Price</Text>
          <View style={[styles.priceTag, styles.greenBackground]}>
            <Text style={styles.greenPrice}>${price.toFixed(2)}</Text>
            <ArrowUpRight size={18} color="#15803d" />
            <View style={[styles.bar, { height: 16, backgroundColor: "#15803d" }]} />
            <View style={[styles.bar, { height: 24, backgroundColor: "#22c55e" }]} />
            <View style={[styles.bar, { height: 12, backgroundColor: "#4ade80" }]} />
          </View>
        </View>

      </View>
    </View>
  );
};

export default PriceCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    width: "100%",
    maxWidth: 370,
    alignItems: "center",
    marginTop: 30,
    ...SHADOWS.medium,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 8,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
    flexShrink: 1,
    flexWrap: "wrap",
    maxWidth: "80%",
  },
  location: {
    color: "#16a34a",
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceBox: {
    alignItems: "center",
  },
  label: {
    color: "#6b7280",
    marginBottom: 4,
  },
  priceTag: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  greenBackground: {
    backgroundColor: COLORS.secondary,
  },
  redBackground: {
    backgroundColor: "#fef2f2",
  },
  greenPrice: {
    fontSize: 18,
    fontWeight: "600",
    color: "#15803d",
  },
  redPrice: {
    fontSize: 18,
    fontWeight: "600",
    color: "red",
  },
  bar: {
    width: 4,
    borderRadius: 2,
  },
});
