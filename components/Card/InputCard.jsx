import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const InputCard = () => {
  const [startStation, setStartStation] = useState(null);
  const [endStation, setEndStation] = useState(null);

  const [selectedPlace, setSelectedPlace] = useState(null);
  const [pickupPosition, setPickupPosition] = useState(null);
  const [destinationPosition, setDestinationPosition] = useState(null);

  const handlePlaceSelection = (details) => {
    console.log("Father detail", details);
    setSelectedPlace(details);
    // Do something with the selected place details in the father components
  };
  const handlePickupPlaceSelection = (details) => {
    setPickupPosition(details);
  };

  const handleDestinationPlaceSelection = (details) => {
    setDestinationPosition(details);
  };

  const handleContinueButtonPress = (response) => {
    console.log(savedPickDetails);

    const requestData = {
      // Request body data
      name: "App Booking",
      distance: 15,
      duration: 15,
      status: "ACTIVE",
      routineType: "RANDOMLY",
      routeType: "SPECIFIC_ROUTE_SPECIFIC_TIME",
      startStation: {
        longtitude: savedPickDetails.geometry.location.lng,
        latitude: savedPickDetails.geometry.location.lat,
        name: savedPickDetails.name,
        address: savedPickDetails.formatted_address,
      },
      endStation: {
        longtitude: savedDesDetails.geometry.location.lng,
        latitude: savedDesDetails.geometry.location.lat,
        name: savedDesDetails.name,
        address: savedDesDetails.formatted_address,
      },
    };

    console.log("send ", requestData);
    response = createRoute(requestData);
    if (response != null) {
      navigation.navigate("BikeSettingSchedule");
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Ionicons name="person-circle-outline" size={20} color="blue" />
        {/* <TextInput
          style={styles.input1}
          placeholder="Chọn điểm bắt đầu"
          pickupPositionDetail={pickupPosition}
        /> */}
        <GooglePlacesAutocomplete
          placeholder="Điểm đón ..."
          styles={{
            textInput: {
              fontSize: 16,
            },
          }}
          onPress={handlePickupPlaceSelection}
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
        {/* <TextInput style={styles.input} placeholder="Chọn điểm kết thuc" destinationPositionDetail={destinationPosition} /> */}
        <GooglePlacesAutocomplete
          placeholder="Điểm đến ..."
          styles={{
            textInput: {
              fontSize: 16,
            },
          }}
          onPress={handleDestinationPlaceSelection}
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
