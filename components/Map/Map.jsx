import React, { useState, useEffect } from 'react';
import { StyleSheet, View, PermissionsAndroid } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

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

  // useEffect(() => {
  //   fetch('https://vigo-api.azurewebsites.net/api/Station/{stationId}')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //     })
  //     .catch(error => {
  //       // Handle errors
  //       console.error(error);
  //     });
  // }, []);

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
    <MapView style={styles.map} region={region}>
      {pickupPosition.pickupPositionDetail && (
        <Marker coordinate={{
          latitude: pickupPosition.pickupPositionDetail.geometry.location.lat,
          longitude: pickupPosition.pickupPositionDetail.geometry.location.lng
        }} />
      )}
      {pickupPosition.destinationPositionDetail && (
        <Marker coordinate={{
          latitude: pickupPosition.destinationPositionDetail.geometry.location.lat,
          longitude: pickupPosition.destinationPositionDetail.geometry.location.lng
        }} />
      )}
      {pickupPosition.pickupPositionDetail && pickupPosition.destinationPositionDetail && (
        <Polyline
          coordinates={[
            {
              latitude: pickupPosition.pickupPositionDetail.geometry.location.lat,
              longitude: pickupPosition.pickupPositionDetail.geometry.location.lng
            },
            {
              latitude: pickupPosition.destinationPositionDetail.geometry.location.lat,
              longitude: pickupPosition.destinationPositionDetail.geometry.location.lng
            }
          ]}
          strokeColor="#FF0000"
          strokeWidth={3}
        />
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;