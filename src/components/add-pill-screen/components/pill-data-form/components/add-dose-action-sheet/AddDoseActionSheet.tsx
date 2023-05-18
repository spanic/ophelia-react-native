import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { FormControl, VStack, View } from 'native-base';
import { useForm } from 'react-hook-form';
import InfoText from '../../../../../info-text/InfoText';
import MultiLineInput from '../multi-line-input/MultiLineInput';
import BottomSheet, { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { Portal } from '@gorhom/portal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import DatePicker from 'react-native-date-picker';
import { ScrollView } from 'react-native-gesture-handler';
import { Platform, StyleSheet } from 'react-native';
import MealTimeOptionsSelector from './components/meal-time-options-selector/MealTimeOptionsSelector';
import Footer from './components/footer/Footer';
import Backdrop from './components/backdrop/Backdrop';
import { FOOTER_BUTTON_HEIGHT } from './constants/Constants';
import { IAddDoseActionSheetProps, IAddDoseFormInput } from './types/AddDoseActionSheet.types';

export const ACTION_SHEET_SNAP_POINTS = ['80%'],
  STANDARD_PADDING_X = 24;

const AddDoseActionSheet: FC<IAddDoseActionSheetProps> = ({ isVisible, onClose }) => {
  const insets = useSafeAreaInsets();

  const [date, setDate] = useState(new Date());

  const bottomSheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    if (isVisible && bottomSheetRef.current) {
      bottomSheetRef.current.snapToIndex(0);
    }
  }, [isVisible, bottomSheetRef.current]);

  const {
    control,
    formState: { errors },
  } = useForm<IAddDoseFormInput>({
    mode: 'onChange',
    defaultValues: {},
  });

  const backdropRenderFn = useCallback(
    (props: BottomSheetBackdropProps) => <Backdrop onClose={onClose} {...props} />,
    [],
  );

  return (
    <>
      <Portal>
        <BottomSheet
          style={styles.bottomSheet}
          ref={bottomSheetRef}
          snapPoints={ACTION_SHEET_SNAP_POINTS}
          keyboardBlurBehavior="restore"
          enablePanDownToClose={true}
          enableContentPanningGesture={false}
          index={-1 /* Closed */}
          topInset={insets.top}
          backdropComponent={backdropRenderFn}
          footerComponent={Footer}
          onClose={onClose}
        >
          <ScrollView style={styles.scroll}>
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
                  placeholder='e. g. "one pill"'
                  useInBottomSheet={Platform.OS === 'ios'}
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
          </ScrollView>
        </BottomSheet>
      </Portal>
    </>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    flex: 1,
  },
  scroll: {
    marginBottom: FOOTER_BUTTON_HEIGHT + 2 * STANDARD_PADDING_X,
  },
  datePicker: {
    width: 150,
  },
});

export default AddDoseActionSheet;
