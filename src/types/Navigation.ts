import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  AddNewPill: undefined;
  Schedule: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type AddPillScreenProps = NativeStackScreenProps<RootStackParamList, 'AddNewPill'>;

export { RootStackParamList, HomeScreenProps, AddPillScreenProps };
