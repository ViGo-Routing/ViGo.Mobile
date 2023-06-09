import { React, useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// IMPORT THEME
import { themeColors } from '../../assets/theme';

// IMPORT FIREBASE 
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from '../../firebase.js';
import firebase from 'firebase/compat/app';

export default function LoginScreen() {
  const navigation = useNavigation();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [vertificationId, setVertificationId] = useState(null);
  const recaptchaVerifier = useRef(null);

  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then((verificationId) => {
        setVertificationId(verificationId);
        navigation.navigate('ConfirmCode', { verificationId });
      });
    setPhoneNumber('');
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
        <TouchableOpacity style={styles.button} onPress={sendVerification}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>
        {/* <Text style={styles.link}>
          Quên mật khẩu?
        </Text> */}
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
        />
        {/* <Text style={styles.registerText}>
          Bạn chưa có tài khoản?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
            <Text style={styles.link}>Đăng ký</Text>
          </TouchableOpacity>
        </Text> */}
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
    justifyContent:'center',
    height:50,
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