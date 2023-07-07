import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";

import Map from "../../components/Map/Map.jsx";
// import BottomSheet from '../../components/BottomSheet/BottomSheetComponent.jsx';
import { themeColors } from "../../assets/theme/index.jsx";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import InputCard from "../../components/Card/InputCard.jsx";
import SwtichVehicle from "../../components/Select Box/SwitchVehicle.jsx";

const BikeBookingScreen = (props) => {
  const navigation = useNavigation();

  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const handleVehicleSelect = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const buttonRows = [
    {
      title: "ViGo Xe Máy",
      screen: "Screen1",
      icon: require("../../assets/icons/vigobike.png"),
      vehicleType: "motorbike",
    },
    {
      title: "ViGo Xe Hơi 4 chỗ",
      screen: "Screen2",
      icon: require("../../assets/icons/vigocar.png"),
      vehicleType: "car",
    },
    {
      title: "ViGo Xe Hơi 7 chỗ",
      screen: "Screen2",
      icon: require("../../assets/icons/vigocar.png"),
      vehicleType: "sevenSeater",
    },
  ];
  const pickup = props.route.params.pickupPosition;
  const destination = props.route.params.destinationPosition;
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [pickupPosition, setPickupPosition] = useState(pickup);
  const [destinationPosition, setDestinationPosition] = useState(destination);

  const handlePlaceSelection = (details) => {
    console.log("Father detail", details);
    setSelectedPlace(details);
    // Do something with the selected place details in the father components
  };
  const handlePickupPlaceSelection = (details) => {
    setPickupPosition(details);
    console.log("pickup ne:", pickupPosition);
  };

  const handleDestinationPlaceSelection = (details) => {
    setDestinationPosition(details);
    console.log("destination ne:", destinationPosition);
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

  const slideUp = new Animated.Value(0);
  const slideUpHandler = () => {
    Animated.timing(slideUp, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    slideUpHandler();
  }, []);

  const windowHeight = Dimensions.get("window").height;
  const bottomSlideHeight = windowHeight * 0.3;

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Map
          pickupPositionDetail={pickupPosition}
          destinationPositionDetail={destinationPosition}
        />
      </View>
      <View
        style={{
          position: "absolute",
          alignSelf: "center",
          top: "5%",
          width: "90%",
        }}
      >
        <InputCard
          pickupPosition={pickupPosition}
          destinationPosition={destinationPosition}
        />
      </View>

      {/* BACKBUTTON */}
      <View
        style={{
          position: "absolute",
          bottom: bottomSlideHeight + 10,
          left: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="arrow-back" size={24} color={themeColors.primary} />
          </View>
        </TouchableOpacity>
      </View>

      {/* BOTTOM SHEET */}
      <Animated.View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "white",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          transform: [
            {
              translateY: slideUp.interpolate({
                inputRange: [0, 1],
                outputRange: [bottomSlideHeight, 0],
              }),
            },
          ],
          alignItems: "center",
        }}
        onPickupPlaceSelect={handlePickupPlaceSelection}
        onDestinationPlaceSelect={handleDestinationPlaceSelection}
        visible={true}
      >
        {/* <View style={styles.selectBoxContainer}>
          <TouchableOpacity
            style={[
              styles.selectBox,
              selectedOption === "option1" && styles.selectedOption,
            ]}
            onPress={() => handleOptionSelect("option1")}
          >
            <Text style={styles.selectBoxTitle}>Đi một chiều</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.selectBox,
              selectedOption === "option2" && styles.selectedOption,
            ]}
            onPress={() => handleOptionSelect("option2")}
          >
            <Text style={styles.selectBoxTitle}>Đi Về</Text>
          </TouchableOpacity>
        </View>

        <SwtichVehicle
          options={buttonRows}
          selectedOption={selectedVehicle}
          onSelect={handleOptionSelect}
        /> */}

        <View
          style={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
            margin: "10%",
            width: "90%",
          }}
        >
          {/* <TouchableOpacity onPress={handleContinueButtonPress} style={styles.continueButton}> */}
          <TouchableOpacity
            onPress={() => navigation.navigate("BookingDetail")}
            style={styles.continueButton}
          >
            <Text style={styles.continueButtonText}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "space-between",
  },
  body: {
    flex: 1,
  },
  selectBoxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },
  selectBox: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  selectedOption: {
    backgroundColor: themeColors.primary,
  },
  selectBoxTitle: {
    color: "black",
    fontWeight: "bold",
  },
  continueButton: {
    alignItems: "center",
    backgroundColor: themeColors.primary,
    borderRadius: 15,
    justifyContent: "center",
    width: "90%",
    height: 50,
  },
  continueButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default BikeBookingScreen;
