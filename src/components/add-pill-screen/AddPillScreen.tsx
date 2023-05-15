import { FC } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import InfoText from '../info-text/InfoText';
import HeaderText from '../header-text/HeaderText';
import PillIconsGallery from './components/pill-icons-gallery/PillIconsGallery';
import PillDataForm from './components/pill-data-form/PillDataForm';
import { View } from 'native-base';

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
