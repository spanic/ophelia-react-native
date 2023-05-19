import { View } from 'native-base';
import { FC } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import HeaderText from '../header-text/HeaderText';
import InfoText from '../info-text/InfoText';
import PillDataForm from './components/pill-data-form/PillDataForm';
import PillIconsGallery from './components/pill-icons-gallery/PillIconsGallery';

const AddPillScreen: FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <View flex={1} paddingX={6} paddingBottom={insets.bottom} bg="white">
        <InfoText marginTop={3}>Step 1 of 2</InfoText>
        <HeaderText marginTop={3}>Add medication</HeaderText>
        <PillIconsGallery />
        <PillDataForm />
      </View>
    </>
  );
};

export default AddPillScreen;
