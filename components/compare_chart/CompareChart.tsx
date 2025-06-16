import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { COLORS, SHADOWS } from "../../constants";

const screenWidth = Dimensions.get("window").width;

const ChartCompare = ({ title, location1, price1, location2, price2 }) => {
  const data = {
    labels: [
      location1,
      location2
    ],
    datasets: [
      {
        data: [price1 || 0, price2 || 0],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    decimalPlaces: 2,
    color: () => COLORS.primary,
    labelColor: () => "#000",
    barPercentage: 1.2,
  };

  const titleParts = title.match(
    /^Bar Chart for (.*?) at (.*?) and (.*)$/
  );

  const commodity = titleParts?.[1] || "";
  const loc1 = titleParts?.[2] || "";
  const loc2 = titleParts?.[3] || "";

  return (
    <View style={styles.card}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Bar Chart for </Text>
        <Text style={[styles.titleText, { color: COLORS.tertiary }]}>
          {commodity}
        </Text>
        <Text style={styles.titleText}> at </Text>
        <Text style={[styles.titleText, { color: COLORS.tertiary }]}>
          {loc1}
        </Text>
        <Text style={styles.titleText}> and </Text>
        <Text style={[styles.titleText, { color: COLORS.tertiary }]}>
          {loc2}
        </Text>
      </View>

      <BarChart
        data={data}
        width={screenWidth - 80}
        height={320}
        chartConfig={chartConfig}
        fromZero
        showValuesOnTopOfBars
        withInnerLines={true}
        yAxisLabel=""
        withVerticalLabels={true}
        yAxisSuffix=""
        verticalLabelRotation ={5}
        style={{ borderRadius: 8, alignSelf: "center" }}
      />
    </View>
  );
};

export default ChartCompare;

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
  titleContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 8,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
