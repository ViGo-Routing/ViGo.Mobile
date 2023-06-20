import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, Text, Button, Modal, TextInput, TouchableOpacity } from 'react-native';
import { themeColors } from '../../assets/theme';
import { useNavigation } from '@react-navigation/native';
// import AutoCompelete from '../SearchBox/AutoCompelete.jsx';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';


const BottomSheet = ({ visible, onClose }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.bottomSheet}>
          {/* <Text><Ionicons name="pin" size={20} color="red" />  Điểm đón</Text>
          <TextInput style={styles.input} placeholder="Search..." />
          <Text><Ionicons name="flag" size={20} color="red" />  Điểm đến</Text>
          <TextInput style={styles.input} placeholder="Search..." /> */}

          <GooglePlacesAutocomplete
            placeholder='Điểm đón ...'
            styles={
              {
                container: {
                  flex: 0,
                },
                textInput: {
                  fontSize: 18,
                }
              }}
            onPress={(data, details = null) => {
              console.log(data);
              console.log(details);
            }}
            returnKeyType={"search"}
            fetchDetails={true}
            return
            minLength={2}
            enablePoweredByContainer={false}
            query={{
              key: 'AIzaSyCIYCycKF24mQXN1pJYFfCO-6azSETj_Qc',
              language: 'vn',
            }}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
          />

          <GooglePlacesAutocomplete
            placeholder='Điểm đến ...'
            styles={
              {
                container: {
                  flex: 0,
                },
                textInput: {
                  fontSize: 18,
                }
              }}
            onPress={(data, details = null) => {
              console.log(data);
              console.log(details);
            }}
            returnKeyType={"search"}
            fetchDetails={true}
            return
            minLength={2}
            enablePoweredByContainer={false}
            query={{
              key: 'AIzaSyCIYCycKF24mQXN1pJYFfCO-6azSETj_Qc',
              language: 'vn',
            }}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
          />
          <TouchableOpacity onPress={() => navigation.navigate('BikeSettingSchedule')} style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Tiếp tục</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Đóng</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottomSheet: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    paddingTop: 10,
    backgroundColor: themeColors.primary,
  },
  closeButton: {
    paddingTop: 10,
    alignItems: 'center',
    backgroundColor: themeColors.primary,
    borderRadius: 10,
    padding: 10,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  continueButton: {
    alignItems: 'center',
    backgroundColor: themeColors.primary,
    borderRadius: 10,
    paddingBottom: 10,
    padding: 10,
  },
  continueButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default BottomSheet;