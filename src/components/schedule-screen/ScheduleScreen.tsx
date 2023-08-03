import { useDisclose } from 'native-base';
import { FC } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import HeaderText from 'src/components/header-text/HeaderText';
import InfoText from 'src/components/info-text/InfoText';

import AddDoseActionSheet from './components/add-dose-action-sheet/AddDoseActionSheet';
import AddDoseButton from './components/add-dose-button/AddDoseButton';

const ScheduleScreen: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <ScrollView
      style={[styles.scrollView]}
      contentContainerStyle={styles.scrollViewContentContainer}
      alwaysBounceVertical={false}
    >
      <InfoText marginTop={3}>Step 2 of 2</InfoText>
      <HeaderText marginTop={3}>Schedule</HeaderText>

      {/* ===== Add dose button ===== */}
      <AddDoseButton onPress={onOpen} />

      {/* ===== Add dose form bottom action sheet ===== */}
      <AddDoseActionSheet isVisible={isOpen} onClose={onClose} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  scrollViewContentContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
});

export default ScheduleScreen;
