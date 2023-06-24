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
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import axios from 'axios';

export default function LoginScreen() {
  const navigation = useNavigation();
  const auth = getAuth();

  console.log(auth)
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [vertificationId, setVertificationId] = useState(null);
  const [verificationCode, setVerificationCode] = useState('');

  // const recaptchaVerifier = useRef(null);
  // const firebaseToken = await firebase.auth().currentUser.getIdToken(true);
  const [firebaseToken, setFirebaseToken] = useState(null);
  useEffect(() => {
    const getToken = async () => {
      if (auth.currentUser) {
        const token = await auth.apiKey;
        setFirebaseToken(token);
      }
    };
    getToken();
  }, []);

  // const handleSendCode = async () => {

  //   const auth = getAuth();
  //   console.log("ssssss", auth + phoneNumber)
  //   const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber);
  //   console.log("ssssss", confirmationResult)
  //   setVerificationCode(confirmationResult)
  //   // Save the confirmationResult for later use
  //   // e.g., in handleVerifyCode function

  // };

  const handleVerifyCode = async () => {
    try {

      console.log('Phone number successfully verified!');
      // User is now signed in
    } catch (error) {
      console.log('Error verifying verification code:', error);
    }
  };

  const sendVerification = async () => {
    try {
      const auth = getAuth();
      //const credential = await signInWithPhoneNumber(auth, confirmationResult.verificationId, verificationCode);
      //console("credential", credential)
      // Check if there is a currently signed-in user
      try {
        console.log(phoneNumber);
        // if (auth.currentUser) {
        // Retrieve the Firebase token

        const headers = {
          'Content-Type': 'application/json-patch+json',
        };

        // Set the request body
        const requestData = {
          phone: phoneNumber,
          firebaseToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjhkMDNhZTdmNDczZjJjNmIyNTI3NmMwNjM2MGViOTk4ODdlMjNhYTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiVGh14bqtbiBMw6oiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdmlnby1hNzc1NCIsImF1ZCI6InZpZ28tYTc3NTQiLCJhdXRoX3RpbWUiOjE2ODc1MDgwMjcsInVzZXJfaWQiOiJKcDNnb0JCS0VXUnV4RURLNDBXZVoxR0VkbnQyIiwic3ViIjoiSnAzZ29CQktFV1J1eEVESzQwV2VaMUdFZG50MiIsImlhdCI6MTY4NzUwODAyNywiZXhwIjoxNjg3NTExNjI3LCJwaG9uZV9udW1iZXIiOiIrODQ5Mzc1MDEwMTkiLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7InBob25lIjpbIis4NDkzNzUwMTAxOSJdfSwic2lnbl9pbl9wcm92aWRlciI6ImN1c3RvbSJ9fQ.htUx4GFxzotfuvrR-DEJUtebCjd1LZ01rMpLLKQ8h0X-LjyG2HZtv68FQk-0kO1SFJI-5iXs5YSURq7uxA5rdL2pnLK5qO_JDOcvkno42Jl71fxAdKt_X0eXXqCCI6IAXFaHIntwXLtU_rrGYWgsAKqz3es7oMGjAM9DX14OeVV2p0hfbu7DsreR5IGG8dzQLgjzTjeSBKlH4XYBL2JSEhAQlZxe25lFhqMyQ3kcjLYXuhfRa4skFzFkfaiK5TDgIRB3G2bH-7Vk0IX5E61fq4FckoF0hRNphYZR_1ovFq6SqqKEy9hVDyNAC-D2AJy6aaBT5ijcVad_p4e-czO9-A',
        };
        console.log(requestData)
        // Make the API request using Axios
        const response = await axios.post('https://vigo-api.azurewebsites.net/api/Authenticate/Mobile/Login', requestData, { headers });
        console.log("dataaaaaa", response.data); // Log the response data

        // Handle successful login
        navigation.navigate('Home');
        // } else {
        //   console.log('No currently signed-in user'); // Log a message indicating that there is no currently signed-in user
        // }
      } catch (error) {
        console.error('An error occurred while retrieving the Firebase token:', error);
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
        {/* <TextInput
          style={styles.input}
          onChangeText={setVertificationId}
          placeholder='Verify Code'
          keyboardType='phone-pad'
        /> */}
        {/* <TouchableOpacity style={styles.button} onPress={sendVerification}> */}
        {/* <TouchableOpacity style={styles.button} onPress={handleSendCode}>
          <Text style={styles.buttonText}>Mã xác thực</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.button} onPress={sendVerification}>
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