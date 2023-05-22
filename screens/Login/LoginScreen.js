import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../../assets/theme';

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/ViGo_logo.png")}
        style={styles.image}
      />
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.smallText}>Welcome to ViGo</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Text style={styles.link}>
          forgot your passowrd?
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.registerText}>
          Don't have an account?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
            <Text style={styles.link}>Register here.</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.linear,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    paddingBottom:80,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    marginBottom: 50,
  },
  title: {
    textAlign: 'left',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  smallText: {
    fontSize: 20,
    paddingBottom:15
  },
  input: {
    height: 50,
    borderRadius: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: themeColors.linear,
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
  registerText: {
    fontSize: 16,
  },
  link: {
    color: themeColors.primary,
    fontSize:16,
    textDecorationLine: 'underline',
  },
});