import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Header from '../../components/Header/Header.jsx'
// import BottomNavigationBar from '../../components/NavBar/BottomNavigationBar.jsx'
import Map from '../../components/Map/Map.jsx'
import BottomSheetComponent from '../../components/Bottom Sheet/BottomSheetComponent.jsx'

const BikeBookingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header title="Xe Máy" />
      </View>
      <View style={styles.body}>
        <Map />
      </View>
      <View style={styles.footer}><BottomSheetComponent /></View>
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
    flex: 1,
  }
});

export default BikeBookingScreen;