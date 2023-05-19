import { FC, useState } from 'react';
import { FormControl, VStack, View } from 'native-base';
import { useForm } from 'react-hook-form';
import InfoText from '../../../../../info-text/InfoText';
import MultiLineInput from '../multi-line-input/MultiLineInput';
import DatePicker from 'react-native-date-picker';
import { Platform, StyleSheet } from 'react-native';
import MealTimeOptionsSelector from './components/meal-time-options-selector/MealTimeOptionsSelector';
import { FOOTER_BUTTON_HEIGHT } from './constants/Constants';
import { IAddDoseActionSheetProps, IAddDoseFormInput } from './types/AddDoseActionSheet.types';
import BottomPanel from '../../../../../bottom-panel/BottomPanel';
import Footer from './components/footer/Footer';

export const ACTION_SHEET_SNAP_POINTS = ['75%'],
  STANDARD_PADDING_X = 24;

const AddDoseActionSheet: FC<IAddDoseActionSheetProps> = ({ isVisible, onClose }) => {
  const [date, setDate] = useState(new Date());

  const {
    control,
    formState: { errors },
  } = useForm<IAddDoseFormInput>({
    mode: 'onChange',
    defaultValues: {},
  });

  return (
    <>
      <BottomPanel
        snapPoints={ACTION_SHEET_SNAP_POINTS}
        isOpened={isVisible}
        footerComponent={Footer}
        _scroll={{ style: { ...styles.scroll } }}
        onClose={onClose}
      >
        <VStack space={10} width={'full'} paddingX={6}>
          <FormControl>
            <FormControl.Label marginTop={-1}>
              <InfoText>Dose</InfoText>
            </FormControl.Label>
            <MultiLineInput<IAddDoseFormInput>
              controllerProps={{
                name: 'dose',
                control,
              }}
              placeholder="enter the amount"
              useInBottomSheet={Platform.OS === 'ios'}
              _textInput={{ keyboardType: 'numeric' }}
            />
            <FormControl.HelperText>Optional</FormControl.HelperText>
          </FormControl>
          <FormControl>
            <FormControl.Label marginTop={-1}>
              <InfoText>When</InfoText>
            </FormControl.Label>
            <View alignItems={'center'}>
              <DatePicker
                mode="time"
                style={styles.datePicker}
                date={date}
                onDateChange={setDate}
              />
            </View>
          </FormControl>
          <MealTimeOptionsSelector />
        </VStack>
      </BottomPanel>
    </>
  );
};

const styles = StyleSheet.create({
  scroll: {
    marginBottom: FOOTER_BUTTON_HEIGHT + 2 * STANDARD_PADDING_X,
  },
  datePicker: {
    width: 150,
  },
});

export default AddDoseActionSheet;
