import { Box } from 'native-base';
import { FC } from 'react';

import AddFloatingButton from 'src/components/add-floating-button/AddFloatingButton';
import DaySelect from 'src/components/day-select/DaySelect';
import InfoText from 'src/components/info-text/InfoText';
import { HomeScreenProps } from 'src/types/Navigation';

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => (
  <Box px={6} flex={1} safeArea>
    <InfoText marginTop={3}>Hello, Andrei</InfoText>
    <DaySelect />
    <AddFloatingButton onPress={() => navigation.navigate('AddNewPill')} />
  </Box>
);

export default HomeScreen;
