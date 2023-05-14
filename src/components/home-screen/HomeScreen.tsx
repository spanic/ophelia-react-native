import { FC } from 'react';
import { Box } from 'native-base';
import InfoText from '../info-text/InfoText';
import DaySelect from '../day-select/DaySelect';
import AddFloatingButton from '../add-floating-button/AddFloatingButton';
import { HomeScreenProps } from '../../types/Navigation';

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => (
  <Box px={6} flex={1} safeArea>
    <InfoText marginTop={3}>Hello, Andrei</InfoText>
    <DaySelect />
    <AddFloatingButton onPress={() => navigation.navigate('AddNewPill')} />
  </Box>
);

export default HomeScreen;
