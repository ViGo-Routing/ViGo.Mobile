import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const InputCard = ({ handlePickupPlaceSelection, handleDestinationPlaceSelection }) => {
  const [startStation, setStartStation] = useState(null);
  const [endStation, setEndStation] = useState(null);
  
  const [selectedPlace, setSelectedPlace] = useState(null);

  const [pickupPosition, setPickupPosition] = useState(null);
  const [destinationPosition, setDestinationPosition] = useState(null);

  const handlePlaceSelection = (details) => {
    setSelectedPlace(details);
    onPickupPlaceSelect(details); // Pass the selected place details to the parent component
  };

  // const handlePickupPlaceSelection = (details, screen) => {
  //   setPickupPosition(details);
  //   screen === "BikeBookingScreen" && handlePlaceSelection(details);
  // };

  // const handleDestinationPlaceSelection = (details, screen) => {
  //   setDestinationPosition(details);
  //   screen === "BikeBookingScreen" && handlePlaceSelection(details);
  // };

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Ionicons name="person-circle-outline" size={20} color="blue" />
        <GooglePlacesAutocomplete
          
          placeholder="Điểm đón ..."
          styles={{
            textInput: {
              fontSize: 16,
            },
          }}
          onPress={(data, details) => handlePickupPlaceSelection(details)}
          returnKeyType={"search"}
          fetchDetails={true}
          return
          minLength={2}
          enablePoweredByContainer={false}
          query={{
            key: "AIzaSyCIYCycKF24mQXN1pJYFfCO-6azSETj_Qc",
            language: "vn",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
      </View>
      <View style={styles.separator} />
      <View style={styles.row}>
        <Ionicons name="compass-outline" size={18} color="orange" />
        <GooglePlacesAutocomplete
          placeholder="Điểm đến ..."
          styles={{
            textInput: {
              fontSize: 16,
            },
          }}
          onPress={(data, details) => handleDestinationPlaceSelection(details)}
          returnKeyType={"search"}
          fetchDetails={true}
          return
          minLength={2}
          enablePoweredByContainer={false}
          query={{
            key: "AIzaSyCIYCycKF24mQXN1pJYFfCO-6azSETj_Qc",
            language: "vn",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
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
