import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, Text, Button, Modal, TextInput, TouchableOpacity } from 'react-native';
import { themeColors } from '../../assets/theme';
import { useNavigation } from '@react-navigation/native';
// import AutoCompelete from '../SearchBox/AutoCompelete.jsx';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import { route_create } from '../../utils/swagger.jsx';

const BottomSheet = ({ visible, onClose, onPickupPlaceSelect, onDestinationPlaceSelect }) => {
  const navigation = useNavigation();
  const [savedPickDetails, setPickSavedDetails] = useState(null);
  const [savedDesDetails, setDesSavedDetails] = useState(null);
  // const dispatch = useDispatch();
  const handlePickupPlaceSelection = (data, details) => {
    onPickupPlaceSelect(details);
    setPickSavedDetails(details);
  };
  const handleDestinationPlaceSelection = (data, details) => {
    onDestinationPlaceSelect(details);
    setDesSavedDetails(details);
  };
  const handleCreateRoute = async () => {
    try {
      const requestData = {
        name: "App Booking",
        distance: 15,
        duration: 15,
        status: "ACTIVE",
        routineType: "RANDOMLY",
        routeType: "SPECIFIC_ROUTE_SPECIFIC_TIME",
        startStation: {
          longtitude: savedPickDetails.geometry.location.lng,
          latitude: savedPickDetails.geometry.location.lat,
          name: savedPickDetails.name,
          address: savedPickDetails.formatted_address
        },
        endStation: {
          longtitude: savedDesDetails.geometry.location.lng,
          latitude: savedDesDetails.geometry.location.lat,
          name: savedDesDetails.name,
          address: savedDesDetails.formatted_address
        }
      };
      console.log('requestData:', requestData);
      const response = await route_create(requestData);
      console.log('API response:', response);

      // Handle the response data accordingly
      // ...
    } catch (error) {
      console.error('API error:', error);
    }
  };

  const handleContinueButtonPress = () => {
    console.log(savedPickDetails)
    const token = 'eyJhbGciOiJIUzI1NieyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjVmOTRkZDg2LTM3YjItNDNhMy05NjJiLTAzNmEzYzAzZDNjOSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBZG1pbiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFETUlOIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoiYWRtaW5AZ21haWwuY29tIiwianRpIjoiMDM5ZmY5NzQtMTlkYS00ZmM3LWFhYzQtY2VhNjE0ZDNiYzliIiwiZXhwIjoxNjg3NTA0MjY4LCJpc3MiOiJodHRwczovL3ZpZ28tYXBpLmF6dXJld2Vic2l0ZXMubmV0LyIsImF1ZCI6Imh0dHBzOi8vdmlnby1hcGkuYXp1cmV3ZWJzaXRlcy5uZXQvIn0.qqIBod9enNj5Nf8IeK0sG3sEM_fm7LKL5HDbVzscAEEIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjVmOTRkZDg2LTM3YjItNDNhMy05NjJiLTAzNmEzYzAzZDNjOSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBZG1pbiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFETUlOIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoiYWRtaW5AZ21haWwuY29tIiwianRpIjoiMzE1NTU3NDMtNTRiYy00NzU2LWIxMTEtZDkwNmRmMTFjZmE1IiwiZXhwIjoxNjg3NTExNDY5LCJpc3MiOiJodHRwczovL3ZpZ28tYXBpLmF6dXJld2Vic2l0ZXMubmV0LyIsImF1ZCI6Imh0dHBzOi8vdmlnby1hcGkuYXp1cmV3ZWJzaXRlcy5uZXQvIn0.rKvBaesGjo0GfALeRk0O0cG5R6K7C3h3JhJ37n4I7rU';
    const requestData = {
      // Request body data
      userId: "0d5b06bf-a443-4c3d-92b7-6f4f514863a8",
      name: "App Booking",
      distance: 15,
      duration: 15,
      status: "ACTIVE",
      routineType: "RANDOMLY",
      routeType: "SPECIFIC_ROUTE_SPECIFIC_TIME",
      startStation: {
        longtitude: savedPickDetails.geometry.location.lng,
        latitude: savedPickDetails.geometry.location.lat,
        name: savedPickDetails.name,
        address: savedPickDetails.formatted_address
      },
      endStation: {
        longtitude: savedDesDetails.geometry.location.lng,
        latitude: savedDesDetails.geometry.location.lat,
        name: savedDesDetails.name,
        address: savedDesDetails.formatted_address
      }
    }

    console.log("send ", requestData)
    axios.post('https://vigo-api.azurewebsites.net/api/Route', requestData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json-patch+json'
      }
    })
      .then(response => {
        // Handle successful response
        const sendData = response.data
        navigation.navigate('BikeSettingSchedule')
        console.log('API Route response:', response.data);
      })
      .catch(error => {
        // Handle error
        console.error('API Route error:', error);
      });
    // navigation.navigate('BikeSettingSchedule', {
    //   pickupDetails: savedPickDetails,
    //   destinationDetails: savedDesDetails,
    // });
  }
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
            onPress={handlePickupPlaceSelection}
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
            onPress={handleDestinationPlaceSelection}
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
          <TouchableOpacity onPress={handleContinueButtonPress} style={styles.continueButton}>
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