import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { themeColors } from '../../assets/theme/index.jsx'
import { useNavigation } from '@react-navigation/native'
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
// IMPORT COMPONENTS
import BottomNavigationBar from '../../components/NavBar/BottomNavigationBar.jsx'
import HomeHeader from '../../components/Header/HomeHeader.jsx'
import CustomButton from '../../components/Button/CustomButton.jsx'
import PromotionCardSwiper from '../../components/Card/PromotionCardSwiper.jsx'
import { getAuth } from 'firebase/auth';


const HomeScreen = () => {
  const auth = getAuth();
  console.log(auth)
  HomeScreen.propTypes = {
    myProp: ViewPropTypes.style, // Ví dụ sử dụng ViewPropTypes với style prop
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}><HomeHeader title="Home" /></View>
      <ScrollView style={styles.body}>
        <CustomButton
          buttons={[
            {
              key: 'bike',
              screen: 'BikeBooking',
              icon: require('../../assets/icons/vigobike.png'),
            },
            {
              key: 'car',
              screen: 'CarBooking',
              icon: require('../../assets/icons/vigocar.png'),
            },
          ]}
        />
        <PromotionCardSwiper
          items={[
            {
              imageSource: require('../../assets/images/login.png'),
              title: 'Title 1',
              description: 'Description 1',
            },
            {
              imageSource: require('../../assets/images/registration.png'),
              title: 'Title 2',
              description: 'Description 2',
            },
            {
              imageSource: require('../../assets/images/registration.png'),
              title: 'Title 3',
              description: 'Description 3',
            },
          ]}
          layout={'default'}
        />
      </ScrollView>
      <View style={styles.footer}><BottomNavigationBar /></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // inner items will be added vertically
    flexGrow: 1,            // all the available vertical space will be occupied by it
    justifyContent: 'space-between', // will create the gutter between body and footer
    backgroundColor: themeColors.linear
  },
  imgae: {
    width: 40,
    height: 40,

  },
  body: {
    flex: 1,
  },
  iconRow: {
    paddingTop: 10,
    flexDirection: 'row',
    padding: 10,
  },
  box: {
    borderRadius: 15,
    backgroundColor: themeColors.primary,
    padding: 5,
    marginHorizontal: 5,
  },
});

export default HomeScreen;