import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { themeColors } from '../../assets/theme';
import axios from 'axios';

const InputCard = ({ data }) => {
    const [startStation, setStartStation] = useState(null);
    const [endStation, setEndStation] = useState(null);
    const token = 'eyJhbGciOiJIUzI1NieyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjVmOTRkZDg2LTM3YjItNDNhMy05NjJiLTAzNmEzYzAzZDNjOSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBZG1pbiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFETUlOIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoiYWRtaW5AZ21haWwuY29tIiwianRpIjoiMDM5ZmY5NzQtMTlkYS00ZmM3LWFhYzQtY2VhNjE0ZDNiYzliIiwiZXhwIjoxNjg3NTA0MjY4LCJpc3MiOiJodHRwczovL3ZpZ28tYXBpLmF6dXJld2Vic2l0ZXMubmV0LyIsImF1ZCI6Imh0dHBzOi8vdmlnby1hcGkuYXp1cmV3ZWJzaXRlcy5uZXQvIn0.qqIBod9enNj5Nf8IeK0sG3sEM_fm7LKL5HDbVzscAEEIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjVmOTRkZDg2LTM3YjItNDNhMy05NjJiLTAzNmEzYzAzZDNjOSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBZG1pbiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFETUlOIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoiYWRtaW5AZ21haWwuY29tIiwianRpIjoiMzE1NTU3NDMtNTRiYy00NzU2LWIxMTEtZDkwNmRmMTFjZmE1IiwiZXhwIjoxNjg3NTExNDY5LCJpc3MiOiJodHRwczovL3ZpZ28tYXBpLmF6dXJld2Vic2l0ZXMubmV0LyIsImF1ZCI6Imh0dHBzOi8vdmlnby1hcGkuYXp1cmV3ZWJzaXRlcy5uZXQvIn0.rKvBaesGjo0GfALeRk0O0cG5R6K7C3h3JhJ37n4I7rU';
    axios.get(`https://vigo-api.azurewebsites.net/api/Station/${data.startStationId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json-patch+json'
        }
    })
        .then(response => {
            setStartStation(response.name)
            console.log('API Station Response:', response.data);
            // You can update your component state or perform any other necessary actions with the response data
        })
        .catch(error => {

            console.log('API Station Error:', error);
            // You can display an error message or perform any other necessary error handling
        });
    axios.get(`https://vigo-api.azurewebsites.net/api/Station/${data.endStationId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json-patch+json'
        }
    })
        .then(response => {
            setEndStation(response.name)
            // Handle the response data
            console.log('API Station Response:', response.data);
            // You can update your component state or perform any other necessary actions with the response data
        })
        .catch(error => {
            // Handle the error
            console.log('API Station Error:', error);
            // You can display an error message or perform any other necessary error handling
        });

    return (
        <View style={styles.card}>
            <View style={styles.row}>
                <Ionicons name="trail-sign" size={20} color={themeColors.primary} />
                <TextInput style={styles.input1} placeholder={startStation} />
            </View>
            <View style={styles.row}>
                <Ionicons name="navigate-circle" size={20} color={themeColors.primary} />
                <TextInput style={styles.input} placeholder={endStation} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: '#fff',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input1: {
        height: 40,
        borderColor: 'gray',
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        flex: 1,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        paddingHorizontal: 10,
    },

});

export default InputCard;