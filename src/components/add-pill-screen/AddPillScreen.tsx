import { FC } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { PortalHost } from '@gorhom/portal';

import HeaderText from '../header-text/HeaderText';
import InfoText from '../info-text/InfoText';
import PillDataForm from './components/pill-data-form/PillDataForm';
import PillIconsGallery from './components/pill-icons-gallery/PillIconsGallery';

const AddPillScreen: FC = () => {
  return (
    <>
      <ScrollView
        style={[styles.scrollView]}
        contentContainerStyle={styles.scrollViewContentContainer}
        alwaysBounceVertical={false}
      >
        <InfoText marginTop={3}>Step 1 of 2</InfoText>
        <HeaderText marginTop={3}>Add medication</HeaderText>
        <PillIconsGallery />
        <PillDataForm />
      </ScrollView>
      <PortalHost name="AddPillScreenPortal" />
    </>
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

export default AddPillScreen;
