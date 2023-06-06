import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../../assets/theme';

import firebase from 'firebase/compat/app';

export default function ConfirmCodeScreen() {

    const [code, setCode] = useState('');
    const [vertificationId, setVertificationId] = useState('');

    const confirmCode = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(
          vertificationId,
          code
        );
        firebase.auth().signInWithCredential(credential)
        .then(()=> {
          setCode('');
        })
        .catch((error) => {
          //show an alert in case of error
          alert(error);
        })
        Alert.alert(
          'Đăng nhập thành công! Hãy đặt chuyến xe đầu tiên của bạn nào'
        )
      };

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/images/ViGo_logo.png")}
                style={styles.image}
            />
            <View style={styles.card}>
                <Text style={styles.title}>OTP</Text>
                <Text style={styles.smallText}>nhập mã OTP</Text>
                <TextInput
                    style={styles.input}
                    placeholder='+84'
                    onChangeText={setCode}
                    autoFocus
                    keyboardType='phone-pad'
                />
                <TouchableOpacity style={styles.button} onPress={confirmCode}>
                    <Text style={styles.buttonText}>Nhập OTP</Text>
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
        fontSize: 18,
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
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 100,
        borderRadius: 20,
        marginBottom: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
    },
    registerText: {
        fontSize: 16,
    },
    registerLink: {
        color: themeColors.primary,
        fontSize: 16,
        // textDecorationLine: 'underline',
    },
});