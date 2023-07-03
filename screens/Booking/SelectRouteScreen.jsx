import React from "react";
import SelectRouteHeader from "../../components/Header/SelectRouteHeader";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import InputCard from "../../components/Card/InputCard";
import ReacommendedLocation from "../../components/Select Box/ReccomendedLocation";
import { themeColors } from "../../assets/theme";
import { useNavigation } from "@react-navigation/native";

const SelectRouteScreen = () => {
  const navigation = useNavigation();
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
          <ReacommendedLocation
            title="Tuyến đường được đề xuất"
            items={[
              {
                iconLeft: "time",
                text: "FPT Ho Chi Minh Campus",
                iconRight: "ios-arrow-forward",
              },
            ]}
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
