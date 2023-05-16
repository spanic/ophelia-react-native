import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Button, FormControl, VStack, View } from 'native-base';
import { useForm } from 'react-hook-form';
import InfoText from '../../../../../info-text/InfoText';
import MultiLineInput from '../multi-line-input/MultiLineInput';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetFooter,
  BottomSheetFooterProps,
} from '@gorhom/bottom-sheet';
import { Portal } from '@gorhom/portal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import DatePicker from 'react-native-date-picker';
import { ScrollView } from 'react-native-gesture-handler';

export interface IAddDoseFormInput {
  dose: string;
}

export interface IAddDoseActionSheetProps {
  isVisible: boolean;
  onClose: () => void;
}

const AddDoseActionSheet: FC<IAddDoseActionSheetProps> = ({ isVisible, onClose }) => {
  const insets = useSafeAreaInsets();

  const [date, setDate] = useState(new Date());

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['70%'], []);

  useEffect(() => {
    if (isVisible && bottomSheetRef.current) {
      bottomSheetRef.current.snapToIndex(0);
    }
  }, [isVisible, bottomSheetRef.current]);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} onPress={onClose} />
    ),
    [],
  );

  const renderFooter = useCallback(
    (props: BottomSheetFooterProps) => (
      <BottomSheetFooter {...props}>
        <Button
          margin={6}
          bg={'#1892FA'}
          borderRadius={16}
          h={'54px'}
          _pressed={{
            bg: '#1581df',
          }}
          _text={{
            fontSize: 'md',
            lineHeight: '20px',
            fontWeight: 700,
          }}
        >
          Add
        </Button>
      </BottomSheetFooter>
    ),
    [],
  );

  const {
    control,
    formState: { errors },
  } = useForm<IAddDoseFormInput>({
    mode: 'onChange',
    defaultValues: {},
  });

  return (
    <>
      <Portal>
        <BottomSheet
          style={{ flex: 1 }}
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          keyboardBlurBehavior="restore"
          enablePanDownToClose={true}
          enableContentPanningGesture={false}
          index={-1 /* Closed */}
          topInset={insets.top}
          backdropComponent={renderBackdrop}
          footerComponent={renderFooter}
          onClose={onClose}
        >
          <ScrollView style={{ marginBottom: 54 + 24 * 2 }}>
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
                    style={{ width: 150 }}
                    date={date}
                    onDateChange={setDate}
                  />
                </View>
              </FormControl>
            </VStack>
          </ScrollView>
        </BottomSheet>
      </Portal>
    </>
  );
};

export default AddDoseActionSheet;
