import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../../components/Header/Header.jsx';
import BottomNavigationBar from '../../components/NavBar/BottomNavigationBar.jsx';
import { themeColors } from '../../assets/theme/index.jsx';

const MyRouteScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Hành trình');

  return (
    <View style={styles.container}>
      <View style={styles.footer}><Header title="Hành trình" /></View>
      <View style={styles.body}>
        <View style={styles.tabContainer}>
          {['Đang đi', 'Đang đợi', 'Lịch sử', 'Đặt trước'].map(tab => (
            <Text
              key={tab}
              style={[styles.tab, selectedTab === tab && styles.selectedTab]}
              onPress={() => setSelectedTab(tab)}>
              {tab}
            </Text>
          ))}
        </View>
        <Text>{selectedTab}</Text>
      </View>
      <View style={styles.footer}>
        <BottomNavigationBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between'
  },
  body: {
    flex: 1,
    backgroundColor: themeColors.linear,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: themeColors.linear,
  },
  tab: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#999',
  },
  selectedTab: {
    color: themeColors.primary,
  },
});

export default MyRouteScreen;