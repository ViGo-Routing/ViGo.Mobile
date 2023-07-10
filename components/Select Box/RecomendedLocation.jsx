import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getStation } from "../../service/stationService";

const RecommendedLocation = ({ title, items }) => {
  const [stations, setStations] = useState([]);

  const handleGetStations = () => {
    getStation({ PageNumber: 1, PageSize: 10 })
      .then((response) => setStations(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        <Ionicons name="flame" size={25} color="orange" />
        {title}
      </Text>
      <View style={styles.separator} />
      <ScrollView
        contentContainerStyle={styles.container}
        style={styles.scrollView}
      >
        <View style={styles.list}>
          {items.map((item, index) => (
            <TouchableOpacity key={index} style={styles.listItem}>
              <Ionicons name={item.iconLeft} size={24} color="black" />
              <View>
                <Text style={styles.listItemText} numberOfLines={1}>
                  {item.text}
                </Text>
              </View>
              <Ionicons name={item.iconRight} size={24} color="black" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 420,
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
    width: "90%",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "orange",
  },
  separator: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 10,
  },
  container: {
    flexGrow: 1,
  },
  scrollView: {
    height: 200, // Set a fixed height for the ScrollView
  },
  list: {
    flexDirection: "column",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  listItemText: {
    flex: 1,
    marginHorizontal: 10,
    width: 240,
  },
  listItemAddress: {
    color: "#999",
    fontSize: 12,
  },
});

export default RecommendedLocation;
