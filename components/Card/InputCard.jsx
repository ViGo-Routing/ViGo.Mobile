import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { themeColors } from '../../assets/theme';

const InputCard = () => {
    return (
        <View style={styles.card}>
            <View style={styles.row}>
                <Ionicons name="trail-sign" size={20} color={themeColors.primary} />
                <TextInput style={styles.input1} placeholder="Trạm Metro" />
            </View>
            <View style={styles.row}>
                <Ionicons name="navigate-circle" size={20} color={themeColors.primary} />
                <TextInput style={styles.input} placeholder="Điểm đến" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
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