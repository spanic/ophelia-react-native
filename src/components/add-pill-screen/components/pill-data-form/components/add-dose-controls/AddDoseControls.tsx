import { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { FormControl, VStack } from 'native-base';
import { useForm } from 'react-hook-form';
import InfoText from '../../../../../info-text/InfoText';
import MultiLineInput from '../multi-line-input/MultiLineInput';
import BottomSheet, { BottomSheetBackdrop, BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { Portal } from '@gorhom/portal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface IAddDoseFormInput {
  dose: string;
}

export interface IAddDoseActionSheetProps {
  isVisible: boolean;
  onClose: () => void;
}

const AddDoseActionSheet: FC<IAddDoseActionSheetProps> = ({ isVisible, onClose }) => {
  const insets = useSafeAreaInsets();

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['50%'], []);

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
          onClose={onClose}
        >
          <VStack flex={1} paddingX={6} space={4} width={'full'}>
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
                useInBottomSheet
              />
            </FormControl>
          </VStack>
        </BottomSheet>
      </Portal>
    </>
  );
};

export default AddDoseActionSheet;
