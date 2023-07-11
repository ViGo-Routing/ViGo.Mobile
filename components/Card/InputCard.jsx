import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapboxGeocoder from "@mapbox/react-native-mapbox-gl/geocoder";

const InputCard = ({
  handlePickupPlaceSelection,
  handleDestinationPlaceSelection,
  pickupLocation,
  destinationLocation,
}) => {
  const [startStation, setStartStation] = useState(null);
  const [endStation, setEndStation] = useState(null);

  const [selectedPlace, setSelectedPlace] = useState(null);

  const [pickupPosition, setPickupPosition] = useState(null);
  const [destinationPosition, setDestinationPosition] = useState(null);

  const handlePlaceSelection = (details) => {
    setSelectedPlace(details);
    onPickupPlaceSelect(details); // Pass the selected place details to the parent component
  };

  var pickupPositionRef, destinationPositionRef;

  useEffect(() => {
    if (
      pickupLocation &&
      destinationLocation &&
      pickupPositionRef &&
      destinationPositionRef
    ) {
      pickupPositionRef.setAddressText(
        pickupLocation?.name + ", " + pickupLocation?.formatted_address
      );
      destinationPositionRef.setAddressText(
        destinationLocation?.name +
          ", " +
          destinationLocation?.formatted_address
      );
    }
  }, []);

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Ionicons name="person-circle-outline" size={20} color="blue" />
        {/* Replace GooglePlacesAutocomplete with MapboxGeocoder */}
        <MapboxGeocoder
          onSelected={(data, details) => handlePickupPlaceSelection(details)}
          placeholder="Điểm đón ..."
          accessToken="sk.eyJ1IjoicGhhdGt2ZCIsImEiOiJjbGp3eGxnZWMwdWV5M2luMXdrNG1kNGYxIn0.N13oGgj6OWkMK0-k6-orCQ"
          autocomplete={true}
          countries="vn"
        />
      </View>
      <View style={styles.separator} />
      <View style={styles.row}>
        <Ionicons name="compass-outline" size={18} color="orange" />
        {/* Replace GooglePlacesAutocomplete with MapboxGeocoder */}
        <MapboxGeocoder
          onSelected={(data, details) => handleDestinationPlaceSelection(details)}
          placeholder="Điểm đến ..."
          accessToken="sk.eyJ1IjoicGhhdGt2ZCIsImEiOiJjbGp3eGxnZWMwdWV5M2luMXdrNG1kNGYxIn0.N13oGgj6OWkMK0-k6-orCQ"
          autocomplete={true}
          countries="vn"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#fff",
    width: "90%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  input1: {
    height: 25,
    borderColor: "gray",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    flex: 1,
  },
  input: {
    height: 25,
    borderColor: "gray",
    paddingHorizontal: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 10,
  },
});

export default InputCard;
