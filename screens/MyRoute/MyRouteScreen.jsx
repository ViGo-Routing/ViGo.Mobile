import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Header from '../../components/Header/Header.jsx'
import BottomNavigationBar from '../../components/NavBar/BottomNavigationBar.jsx'

const MyRouteScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.footer}><Header title="MyRouteScreen" /></View>
      <View style={styles.body}><Text>MyRouteScreen</Text></View>
      <View style={styles.footer}><BottomNavigationBar /></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // inner items will be added vertically
    flexGrow: 1,            // all the available vertical space will be occupied by it
    justifyContent: 'space-between' // will create the gutter between body and footer
  },
});

export default MyRouteScreen;