import React, { useState, useEffect, useContext } from "react";
import SelectRouteHeader from "../../components/Header/SelectRouteHeader";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import InputCard from "../../components/Card/InputCard";
import RecommendedLocation from "../../components/Select Box/RecomendedLocation";
import { themeColors } from "../../assets/theme";
import { useNavigation } from "@react-navigation/native";
import { getStation } from "../../service/stationService";
import { getRouteByUserId } from "../../service/routeService";
import { UserContext } from "../../context/UserContext";

const SelectRouteScreen = ({ }) => {
  const { user } = useContext(UserContext);
  const navigation = useNavigation();

  const [stations, setStations] = useState([]);

  const [pickupPosition, setPickupPosition] = useState(null);
  const [destinationPosition, setDestinationPosition] = useState(null);

  const handlePlaceSelection = (details) => {
    setSelectedPlace(details);
    onPickupPlaceSelect(details); // Pass the selected place details to the parent component
  };
  const handlePickupPlaceSelection = (details, screen) => {
    setPickupPosition(details);
    screen === "BikeBookingScreen" && handlePlaceSelection(details);
  };

  const handleDestinationPlaceSelection = (details, screen) => {
    setDestinationPosition(details);
    screen === "BikeBookingScreen" && handlePlaceSelection(details);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRouteByUserId();
        setStations(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SelectRouteHeader
          title="Chọn tuyến đường"
          subtitle="Bạn muốn đi đâu?"
          onBack={() => navigation.goBack()}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.card}>
          <InputCard
            handlePickupPlaceSelection={handlePickupPlaceSelection}
            handleDestinationPlaceSelection={handleDestinationPlaceSelection}
          />
        </View>
        <View style={styles.card}>
          <RecommendedLocation
            title="Tuyến đường được đề xuất"
            items={stations.map((station) => ({
              iconLeft: "time",
              text: station.name,
              address: station.address,
              iconRight: "ios-arrow-forward",
            }))}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("BikeBooking", { pickupPosition: pickupPosition, destinationPosition: destinationPosition })}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectRouteScreen;

const styles = StyleSheet.create({
  body: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  card: {
    alignItems: "center",
    width: "100%",
  },
  button: {
    width: "90%",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: themeColors.primary,
    alignItems: "center",
  },
  card_button: {
    marginTop: "75%",
    alignItems: "center",
    width: "100%",
  },
});
