import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Header from '../../components/Header/Header.jsx';
import Map from '../../components/Map/Map.jsx';
import BottomSheet from '../../components/BottomSheet/BottomSheetComponent.jsx';
import { themeColors } from '../../assets/theme/index.jsx';

const BikeBookingScreen = () => {
  const [visible, setVisible] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const [pickupPosition, setPickupPosition] = useState(null);
  const [destinationPosition, setDestinationPosition] = useState(null);
  const handlePlaceSelection = (details) => {
    console.log("Father detail", details);
    setSelectedPlace(details);
    // Do something with the selected place details in the father component
  };
  const handlePickupPlaceSelection = (details) => {
    setPickupPosition(details);
  };

  const handleDestinationPlaceSelection = (details) => {
    setDestinationPosition(details);
  };
  return (
    <View style={styles.container}>
      <View >
        <Header style={styles.header} title="Xe Máy" />
      </View>
      <View style={styles.body}>
        <Map pickupPositionDetail={pickupPosition} destinationPositionDetail={destinationPosition} />
      </View>
      <Button style={{ color: themeColors.primary }} title="Tìm kiếm vị trí của bạn nào" onPress={() => setVisible(true)} />
      <View style={styles.footer}>
        <BottomSheet onPickupPlaceSelect={handlePickupPlaceSelection} onDestinationPlaceSelect={handleDestinationPlaceSelection} visible={visible} onClose={() => setVisible(false)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flexDirection: 'column', // inner items will be added vertically
    flexGrow: 1, // all the available vertical space will be occupied by it
    justifyContent: 'space-between', // will create the gutter between body and footer
  },
  body: {
    flex: 1,
  },
  footer: {
    marginTop: 10,
  }
});

export default BikeBookingScreen;