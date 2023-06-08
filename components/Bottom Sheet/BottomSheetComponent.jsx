import React, { useRef } from 'react';
import { View, Text, Button } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const BottomSheetComponent = () => {
  const bottomSheetRef = useRef(null);

  const handleOpenBottomSheet = () => {
    bottomSheetRef.current?.snapTo(1);
  };

  return (
    <>
      <Button title="Open Bottom Sheet" onPress={handleOpenBottomSheet} />
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={['25%', '50%']}
      >
        <View>
          <Text>Content goes here</Text>
        </View>
      </BottomSheet>
    </>
  );
};

export default BottomSheetComponent;