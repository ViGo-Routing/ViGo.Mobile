import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { themeColors } from '../../assets/theme';

const SelectDailyRoute = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <View style={styles.card}>
      {days.map((day) => (
        <TouchableOpacity
          key={day}
          style={[styles.button, day === selectedDay && styles.selectedButton]}
          onPress={() => setSelectedDay(day)}
        >
          <Text>{`Every ${day}`}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    borderBottomWidth: 0.2,
  },
  selectedButton: {
    backgroundColor: themeColors.linear,
  },
});

export default SelectDailyRoute;