import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../../assets/theme';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to ViGo</Text>
      <Image
        source={require("../../assets/images/ViGo_logo.png")}
        style={styles.image}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: themeColors.linear,
    
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: themeColors.primary,
  },
  button: {
    backgroundColor: themeColors.primary,
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 20,
    marginBottom: 10,
  },
  buttonText: {
    textAlign:'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;