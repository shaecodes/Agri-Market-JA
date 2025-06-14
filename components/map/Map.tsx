import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

const locations = [
  { id: 1, name: "CORONATION Market", lat: 17.9911, lng: -76.7923 },
  { id: 2, name: "WATERLOO ROAD Mega Mart", lat: 18.0178, lng: -76.7996 },
  { id: 3, name: "NEW KINGSTON John R Wong", lat: 18.0076, lng: -76.7831 },
  { id: 4, name: "HALF-WAY TREE Brooklyn", lat: 18.0086, lng: -76.7969 },
  { id: 5, name: "WASHINGTON BOULEVARD Shopper's Fair", lat: 18.0142, lng: -76.8371 },
  { id: 6, name: "DUHANEY PARK Shopper's Fair", lat: 18.017, lng: -76.8501 },
  { id: 7, name: "LIGUANEA General Foods", lat: 18.0089, lng: -76.7466 },
  { id: 8, name: "BARBICAN ROAD Loshusan", lat: 18.0211, lng: -76.7502 },
  { id: 9, name: "BARBICAN ROAD Hi-Lo", lat: 18.0225, lng: -76.7488 },
  { id: 10, name: "CONSTANT SPRING Hi-Lo", lat: 18.0437, lng: -76.7911 },
  { id: 11, name: "CONSTANT SPRING Select Grocers", lat: 18.0432, lng: -76.7901 },
  { id: 12, name: "HARBOUR VIEW Shopper's Fair", lat: 17.9533, lng: -76.7175 },
  { id: 13, name: "RED HILLS ROAD Lee's Food Fair", lat: 18.0445, lng: -76.8022 },
  { id: 14, name: "PORTMORE Progressive Foods", lat: 17.9500, lng: -76.8797 },
  { id: 15, name: "PORTMORE Mega Mart", lat: 17.9630, lng: -76.8786 },
  { id: 16, name: "PORTMORE Joong", lat: 17.9645, lng: -76.8812 },
  { id: 17, name: "PORTMORE Hi-Lo", lat: 17.9613, lng: -76.8750 },
];

const NativeMap = () => {
  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 18.012,
          longitude: -76.797,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
      >
        {locations.map((location) => (
          <Marker
            key={location.id}
            coordinate={{ latitude: location.lat, longitude: location.lng }}
            title={location.name}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    width: '90%',
    height: 300,
    marginVertical: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
  },
});

export default NativeMap;
