import React from 'react';
import { View, TextInput, Image, StyleSheet, Text } from 'react-native';
import { themeColors } from '../../assets/theme';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: 'https://avatars.githubusercontent.com/u/66261053?v=4' }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Name</Text>
        <View style={styles.inputBorder}>
          <TextInput style={styles.input} />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Email</Text>
        <View style={styles.inputBorder}>
          <TextInput style={styles.input} />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Phone</Text>
        <View style={styles.inputBorder}>
          <TextInput style={styles.input} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 5,
    borderColor: themeColors.primary,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 10,
    backgroundColor: themeColors.linear

  },
  inputTitle: {
    borderRadius: 10,
    color: themeColors.linear,
    position: 'absolute',
    top: -8,
    left: 10,
    backgroundColor: themeColors.primary,
    paddingHorizontal: 5,
    zIndex: 1,
  },
  inputBorder: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  input: {
    height: 40,
    padding: 10,
  },
});

export default Profile;