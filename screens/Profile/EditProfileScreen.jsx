import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

// IMPORT COMPONENTS
import Header from '../../components/Header/Header.jsx'
import CustomButton from '../../components/Button/CustomButton.jsx'
import Profile from '../../components/Profile/Profile.jsx'

const EditProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.footer}><Header title="Edit Profile" /></View>
      <View style={styles.body}>
        <Profile />
        <View style={styles.buttonContainer}>
          <CustomButton
            style={styles.btn}
            title="Update"
          // onPress={() => navigation.navigate('Details')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // inner items will be added vertically
    flexGrow: 1,            // all the available vertical space will be occupied by it
    justifyContent: 'space-between' // will create the gutter between body and footer
  },
  body: {
    paddingTop: 30,
    flex: 1,
  },
  buttonContainer: {
    padding: 16,
    paddingTop: 225,
  },
});

export default EditProfileScreen;