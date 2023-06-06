import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import BottomNavigationBar from '../../components/NavBar/BottomNavigationBar.jsx'
import HomeHeader from '../../components/Header/HomeHeader.jsx'
import { themeColors } from '../../assets/theme/index.jsx'
import LinkIcon from '../../components/Icon/LinkIcon.jsx'
import { SvgUri } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}><HomeHeader title="Home" /></View>
      <View style={styles.body}>
        <View style={styles.iconRow}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <SvgUri
              width="100%"
              height="100%"
              uri=""
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Promotion')}>
            <Ionicons name="pricetags" size={40} color={themeColors.primary} />
          </TouchableOpacity></View>
      </View>
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
  body: {
    flex: 1,
  },
  iconRow: {
    flexDirection: 'row',
  }
});

export default HomeScreen;