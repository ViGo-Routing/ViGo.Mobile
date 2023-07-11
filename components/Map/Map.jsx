import React, { useState, useEffect } from 'react';
import { StyleSheet, View, PermissionsAndroid } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MapboxDirections from '@mapbox/react-native-mapbox-gl-directions';
import { createRoute } from '../../service/routeService';
import { useNavigation } from '@react-navigation/native';

const Map = ({ pickupPosition, destinationPosition, sendRouteId }) => {
  const [region, setRegion] = useState({
    latitude: 10.762622,
    longitude: 106.660172,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    console.log("pickupPosition", pickupPosition);
    if (pickupPosition != null) {
      const { location } = pickupPosition.geometry;
      const { lat, lng } = location;
      setRegion(prevRegion => ({
        ...prevRegion,
        latitude: lat,
        longitude: lng,
      }));
    }
  }, [pickupPosition]);

  useEffect(() => {
    if (destinationPosition != null) {
      const { location } = destinationPosition.geometry;
      const { lat, lng } = location;
      setRegion(prevRegion => ({
        ...prevRegion,
        latitude: lat,
        longitude: lng,
      }));
    }
  }, [destinationPosition]);

  const handleDirectionsReady = async (result) => {
    const requestData = {
      // Request body data
      name: `${pickupPosition.name} - ${destinationPosition.name}`,
      distance: result.distance,
      duration: result.duration,
      status: "ACTIVE",
      routineType: "RANDOMLY",
      routeType: "SPECIFIC_ROUTE_SPECIFIC_TIME",
      startStation: {
        longitude: pickupPosition.geometry.location.lng,
        latitude: pickupPosition.geometry.location.lat,
        name: pickupPosition.name,
        address: pickupPosition.formatted_address,
      },
      endStation: {
        longitude: destinationPosition.geometry.location.lng,
        latitude: destinationPosition.geometry.location.lat,
        name: destinationPosition.name,
        address: destinationPosition.formatted_address,
      },
    };
    try {
      const response = await createRoute(requestData);
      console.log("response", response.data.id);
      sendRouteId(response.data.id);
    } catch (error) {
      console.log("Create Route Error", error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }} region={region}>
        {pickupPosition && (
          <Marker
            coordinate={{
              latitude: pickupPosition.geometry.location.lat,
              longitude: pickupPosition.geometry.location.lng,
            }}
          />
        )}
        {destinationPosition && (
          <Marker
            coordinate={{
              latitude: destinationPosition.geometry.location.lat,
              longitude: destinationPosition.geometry.location.lng,
            }}
          />
        )}
        {pickupPosition && destinationPosition && (
          <MapboxDirections
            origin={{
              latitude: pickupPosition.geometry.location.lat,
              longitude: pickupPosition.geometry.location.lng,
            }}
            destination={{
              latitude: destinationPosition.geometry.location.lat,
              longitude: destinationPosition.geometry.location.lng,
            }}
            apikey="sk.eyJ1IjoicGhhdGt2ZCIsImEiOiJjbGp3eGxnZWMwdWV5M2luMXdrNG1kNGYxIn0.N13oGgj6OWkMK0-k6-orCQ"
            strokeWidth={3}
            strokeColor="#00A1A1"
            mode="driving"
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