import React from 'react'
import { StyleSheet, View } from 'react-native'
import BottomNavigationBar from '../../components/NavBar/BottomNavigationBar.jsx'
import HomeHeader from '../../components/Header/HomeHeader.jsx'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}><HomeHeader title="Home"/></View>
      <View style={styles.body}></View>
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

export default HomeScreen;