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

const SelectRouteScreen = () => {
  const { user } = useContext(UserContext);
  const navigation = useNavigation();

  const [stations, setStations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRouteByUserId();
        console.log(response.data)// Call the getRouteByUserId function
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
          <InputCard />
        </View>
        {/* <View style={styles.card}>
            
        </View> */}
        <View style={styles.card}>
          <RecommendedLocation
            title="Tuyến đường được đề xuất"
            items={stations.map((station) => ({
              iconLeft: "time",
              text: station.name,
              address: station.address, // add this line
              iconRight: "ios-arrow-forward",
            }))}
          />
        </View>
      </View>
      <View style={styles.card_button}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("BikeBooking")}
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
