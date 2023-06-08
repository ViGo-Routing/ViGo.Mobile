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
        const requestLocationPermission = async () => {
            if (Platform.OS === 'android') {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: 'Location Permission',
                        message: 'This app needs access to your location',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    },
                );
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } else {
                return Geolocation.requestAuthorization('whenInUse');
            }
        };

        const getCurrentLocation = async () => {
            const hasLocationPermission = await requestLocationPermission();
            if (hasLocationPermission) {
                Geolocation.getCurrentPosition(
                    position => {
                        setRegion({
                            ...region,
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        });
                    },
                    error => console.log(error),
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
                );
            }
        };

        getCurrentLocation();
    }, []);

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