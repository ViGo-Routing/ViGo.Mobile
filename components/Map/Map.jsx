import React, { useState, useEffect } from 'react';
import { StyleSheet, View, PermissionsAndroid } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-maps-directions';

const Map = (pickupPosition, destinationPosition) => {

  useEffect(() => {
    console.log('Child pickupPosition', pickupPosition);
    console.log('Child destinationPosition', destinationPosition);
  }, [pickupPosition, destinationPosition]);

  const [region, setRegion] = useState({
    latitude: 10.762622,
    longitude: 106.660172,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  useEffect(() => {
    if (pickupPosition.pickupPositionDetail != null) {
      const { location } = pickupPosition.pickupPositionDetail.geometry;
      const { lat, lng } = location;
      setRegion(prevRegion => ({
        ...prevRegion,
        latitude: lat,
        longitude: lng,
      }));
    }
  }, [pickupPosition]);

  useEffect(() => {
    if (pickupPosition.destinationPositionDetail != null) {
      const { location } = pickupPosition.destinationPositionDetail.geometry;
      const { lat, lng } = location;
      setRegion(prevRegion => ({
        ...prevRegion,
        latitude: lat,
        longitude: lng,
      }));
    }
  }, [destinationPosition]);
  const handleDirectionsReady = async  (result) => {
    console.log('Duration:', result.duration); // Duration in seconds
    console.log('Distance:', result.distance); // Distance in meters
    setRouteInfo({ duration: result.duration, distance: result.distance });

    const requestData = { duration: result.duration, distance: result.distance };
    const response = await fareCalculate(requestData);
    setApiResponse(response);
  };


  const stationId = '';
  // const requestBody = {
  //   longitude: 0,
  //   latitude: 0,
  //   name: 'string',
  //   address: 'string',
  //   stationIndex: 0
  // };
  fetch(`/api/Station/${stationId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify(requestBody)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

  return (
    // <MapView style={styles.map} region={region}>
    //   {pickupPosition.pickupPositionDetail && (
    //     <Marker coordinate={{
    //       latitude: pickupPosition.pickupPositionDetail.geometry.location.lat,
    //       longitude: pickupPosition.pickupPositionDetail.geometry.location.lng
    //     }} />
    //   )}
    //   {pickupPosition.destinationPositionDetail && (
    //     <Marker coordinate={{
    //       latitude: pickupPosition.destinationPositionDetail.geometry.location.lat,
    //       longitude: pickupPosition.destinationPositionDetail.geometry.location.lng
    //     }} />
    //   )}
    //   {pickupPosition.pickupPositionDetail && pickupPosition.destinationPositionDetail && (
    //     <Polyline
    //       coordinates={[
    //         {
    //           latitude: pickupPosition.pickupPositionDetail.geometry.location.lat,
    //           longitude: pickupPosition.pickupPositionDetail.geometry.location.lng
    //         },
    //         {
    //           latitude: pickupPosition.destinationPositionDetail.geometry.location.lat,
    //           longitude: pickupPosition.destinationPositionDetail.geometry.location.lng
    //         }
    //       ]}
    //       strokeColor="#FF0000"
    //       strokeWidth={3}
    //     />
    //     // <MapViewDirections
    //     //   origin={{
    //     //     latitude: pickupPosition.pickupPositionDetail.geometry.location.lat,
    //     //     longitude: pickupPosition.pickupPositionDetail.geometry.location.lng
    //     //   }}
    //     //   destination={{
    //     //     latitude: pickupPosition.destinationPositionDetail.geometry.location.lat,
    //     //     longitude: pickupPosition.destinationPositionDetail.geometry.location.lng
    //     //   }}
    //     //   apikey="AIzaSyCIYCycKF24mQXN1pJYFfCO-6azSETj_Qc"
    //     //   strokeWidth={3}
    //     //   strokeColor="blue"
    //     //   mode="bicycling"
    //     // />
    //   )}

    // </MapView>
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }} region={region}>
        {pickupPosition.pickupPositionDetail && (
          <Marker
            coordinate={{
              latitude: pickupPosition.pickupPositionDetail.geometry.location.lat,
              longitude: pickupPosition.pickupPositionDetail.geometry.location.lng,
            }}
          />
        )}
        {pickupPosition.destinationPositionDetail && (
          <Marker
            coordinate={{
              latitude: pickupPosition.destinationPositionDetail.geometry.location.lat,
              longitude: pickupPosition.destinationPositionDetail.geometry.location.lng,
            }}
          />
        )}
        {pickupPosition.pickupPositionDetail && pickupPosition.destinationPositionDetail && (
          <MapViewDirections
            origin={{
              latitude: pickupPosition.pickupPositionDetail.geometry.location.lat,
              longitude: pickupPosition.pickupPositionDetail.geometry.location.lng,
            }}
            destination={{
              latitude: pickupPosition.destinationPositionDetail.geometry.location.lat,
              longitude: pickupPosition.destinationPositionDetail.geometry.location.lng,
            }}
            apikey="AIzaSyCIYCycKF24mQXN1pJYFfCO-6azSETj_Qc"
            strokeWidth={3}
            strokeColor="#00A1A1"
            mode="motobike"
            onReady={handleDirectionsReady}
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;