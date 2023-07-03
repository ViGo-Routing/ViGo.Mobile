import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { themeColors } from "../../assets/theme";

const ReacommendedLocation = ({ title, items }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        <Ionicons
          name="flame"
          size={25}
          color='orange'
        />
        {title}
      </Text>
      <View style={styles.separator} />
      <View style={styles.list}>
        {items.map((item, index) => (
          <TouchableOpacity key={index} style={styles.listItem}>
            <Ionicons name={item.iconLeft} size={24} color="black" />
            <Text style={styles.listItemText}>{item.text}</Text>
            <Ionicons name={item.iconRight} size={24} color="black" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
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
  },
});

export default ReacommendedLocation;
