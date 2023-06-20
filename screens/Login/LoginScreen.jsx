import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Swagger from 'swagger-react-native-client';

// IMPORT THEME
import { themeColors } from '../../assets/theme';

// IMPORT FIREBASE 
// import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import firebase from 'firebase/compat/app';
import firebaseConfig from "../../firebase.js"

export default function LoginScreen() {
  const navigation = useNavigation();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [vertificationId, setVertificationId] = useState(null);
  // const recaptchaVerifier = useRef(null);
  // const firebaseToken = await firebase.auth().currentUser.getIdToken(true);
  const [firebaseToken, setFirebaseToken] = useState(null);
  useEffect(() => {
    const getToken = async () => {
      // Check if there is a currently signed-in user
      if (firebase.auth().currentUser) {
        const token = await firebase.auth().currentUser.getIdToken(true);
        setFirebaseToken(token);
      } else {
        // Handle the case where there is no currently signed-in user
      }
    };
    getToken();
  }, []);

  const sendVerification = async () => {
    try {
      // Check if there is a currently signed-in user
      try {
        console.log(phoneNumber);
        if (firebase.auth().currentUser) {
          // Retrieve the Firebase token
          const firebaseToken = await firebase.auth().currentUser.getIdToken(true);
          console.log(firebaseToken); // Log the value of firebaseToken
        } else {
          console.log('No currently signed-in user'); // Log a message indicating that there is no currently signed-in user
        }
      } catch (error) {
        console.error('An error occurred while retrieving the Firebase token:', error);
      }

      
      if (firebase.auth().currentUser) {
        // Retrieve the Firebase token
        const firebaseToken = await firebase.auth().currentUser.getIdToken(true);
        // Create a Swagger instance with the URL of your API
        const api = await Swagger('https://vigo-api.azurewebsites.net/swagger/v1/swagger.json');
        // Call the login endpoint with the provided phone number and firebase token
        const response = await api.apis.authrentication.login({ phone: phoneNumber, firebaseToken });
        console.log(response); // Log the value of response
        if (response.error) {
          console.error('An error occurred while calling the login endpoint:', response.error);
        } else {
          // Store response data
        }
        // Handle successful login
        navigation.navigate('Home');
      } else {
        // Handle the case where there is no currently signed-in user
      }
    } catch (error) {
      console.error('An error occurred while retrieving the Firebase token:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/ViGo_logo.png")}
        style={styles.image}
      />
      <View style={styles.card}>
        <Text style={styles.title}>Đăng nhập</Text>
        <Text style={styles.smallText}>Chào mừng bạn đến ViGo</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPhoneNumber}
          placeholder='+84'
          autoCompleteType='tel'
          keyboardType='phone-pad'
        />
        {/* <TouchableOpacity style={styles.button} onPress={sendVerification}> */}
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>
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
    paddingBottom: 80,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    marginTop: 40,
    marginBottom: 30,
  },
  title: {
    textAlign: 'left',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  smallText: {
    fontSize: 20,
    paddingBottom: 15
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
    marginTop: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    justifyContent: 'center',
    height: 50,
    alignSelf: 'flex-end',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  // registerText: {
  //   fontSize: 16,
  // },
  // link: {
  //   color: themeColors.primary,
  //   fontSize: 16,
  // },
});