import React, { useState, useEffect } from 'react';
import { StyleSheet, View, PermissionsAndroid } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const Map = () => {
  const [region, setRegion] = useState({
    latitude: 10.762622,
    longitude: 106.660172,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    fetch('https://vigo-api.azurewebsites.net/swagger/v1/swagger.json')
      .then(response => response.json())
      .then(data => {
        const stationPath = data.paths['/api/Station/{stationId}'];
        console.log(stationPath);
      })
      .catch(error => {
        // Handle errors
        console.error(error);
      });
  }, []);

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
      <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;