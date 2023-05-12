import { FC } from 'react';
import { View } from 'native-base';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import InfoText from '../info-text/InfoText';
import HeaderText from '../header-text/HeaderText';
import PillIconsGallery from './components/pill-icons-gallery/PillIconsGallery';

const AddPillScreen: FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      px={6}
      display="flex"
      paddingBottom={insets.bottom}
      flexDirection="column"
      alignItems="flex-start"
      flexGrow={1}
      bg="white"
    >
      <InfoText>Step 1 of 2</InfoText>
      <HeaderText marginTop={3}>Add medication</HeaderText>
      <PillIconsGallery />
    </View>
  );
};

export default AddPillScreen;
