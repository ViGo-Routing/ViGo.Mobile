import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import Header from "../../components/Header/Header.jsx";
import InputCard from "../../components/Card/InputCard.jsx";
import { themeColors } from "../../assets/theme/index.jsx";
import DetailCard from "../../components/Card/DetailCard";
import { useNavigation } from "@react-navigation/native";
import { fareCalculate } from "../../service/fareCalculate.jsx";

const BookingDetailScreen = () => {
  const navigation = useNavigation();
  const [fareCalculation, setFareCalculation] = useState(null);

  useEffect(() => {
    fareCalculate(requestData).then((responseData) => {
      setFareCalculation(responseData);
    });
  }, []);

  useEffect(() => {
    console.log("FareCaculated:", fareCalculation);
  }, [fareCalculation]);

  return (
    <View style={styles.container}>
      <View>
        <Header style={styles.header} title="Chi tiết" />
      </View>
      <View style={styles.body}>
        <View style={styles.card}>
          <InputCard />
        </View>
        <View style={styles.detail}>
          <Text style={styles.Title}>Chuyến đi</Text>
          <DetailCard title="Loại xe" info="ViRide" />
          <DetailCard title="Loại Chuyến" info="Tháng" />
          <DetailCard title="Ngày bắt đầu" info="06/09/2023" />
          <DetailCard title="Ngày kết thúc" info="06/10/2023" />
          <DetailCard title="Ngày đặt" info="01/09/2023" />
        </View>
        <View style={styles.payment}>
          <Text style={styles.Title}>Thanh Toán</Text>
          <DetailCard title="Giá gốc" info={fareCalculation?.originalFare} />
          <DetailCard title="Phụ phí" info={fareCalculation?.additionalFare} />
          <DetailCard title="Mã giảm giá" info="12,000 VND" />
          <DetailCard title="Tổng tiền" info={fareCalculation?.finalFare} />
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Alert.alert(
              "Hoàn Thành",
              "Bàn vừa hoàn tất đặt chuyến xe định kì, hãy đợi chúng tôi tìm tài xế thích hợp cho bạn nhé!",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                {
                  text: "OK",
                  onPress: () => navigation.navigate("MyRoute"),
                },
              ],
              { cancelable: false }
            );
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  payment: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  Title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "gray",
  },
  container: {
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "space-between",
  },
  detail: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  row: {
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  body: {
    flex: 1,
    backgroundColor: "white",
  },
  calen: {
    padding: 20,
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  sdr: {
    padding: 10,
  },
  button: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: themeColors.primary,
    alignItems: "center",
  },
  footer: {
    padding: 10,
    backgroundColor: "white",
  },
});

export default BookingDetailScreen;
