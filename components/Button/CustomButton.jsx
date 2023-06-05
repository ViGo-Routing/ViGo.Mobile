import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { themeColors } from '../../assets/theme';

const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: themeColors.primary,
        padding: 10,
        borderRadius: 20,
    },
    text: {
        color: "white",
        fontSize: 25,
        textAlign: 'center',
    },
});

export default Button;