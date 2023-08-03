import { Button, FormControl, useDisclose, View, VStack } from 'native-base';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Shadow } from 'react-native-shadow-2';

import TypeAndUnitSelector from 'src/components/add-pill-screen/components/pill-data-form/components/pill-type-and-unit-selector/TypeAndUnitSelector';
import InfoText from 'src/components/info-text/InfoText';

import { Portal } from '@gorhom/portal';

import MultiLineInput from './components/multi-line-input/MultiLineInput';
import { IPillDataFormInput } from './types/PillDataForm.types';

const PillDataForm: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const insets = useSafeAreaInsets();

  const {
    control,
    formState: { errors, isValid },
  } = useForm<IPillDataFormInput>({
    mode: 'onChange',
    defaultValues: {},
  });

  return (
    <>
      <VStack space={10} marginTop={10} width="full">
        {/* ===== Medication name text input ===== */}
        <FormControl isInvalid={!!errors.name}>
          <FormControl.Label marginTop={-1}>
            <InfoText>Name</InfoText>
          </FormControl.Label>
          <Controller
            control={control}
            render={({ field: { value, onChange, onBlur } }) => (
              <MultiLineInput
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                _textInput={{
                  placeholder: 'e. g. "Omega 3',
                }}
              />
            )}
            rules={{ required: true }}
            name={'name'}
          />
          {!errors.name && <FormControl.HelperText>Required</FormControl.HelperText>}
          {errors.name?.type === 'required' && (
            <FormControl.ErrorMessage>This field is required</FormControl.ErrorMessage>
          )}
        </FormControl>

        {/* ===== Pill types and units selector ===== */}
        <FormControl>
          <FormControl.Label marginTop={-1}>
            <InfoText>Type</InfoText>
          </FormControl.Label>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { value, onChange } }) => (
              <TypeAndUnitSelector value={value} onChange={onChange} />
            )}
            name={'typeAndUnit'}
          />
        </FormControl>

        {/* ===== Add dose button ===== */}
        {/* <AddDoseButton onPress={onOpen} /> */}

        {/* ===== Add dose form bottom action sheet ===== */}
        {/* <AddDoseActionSheet isVisible={isOpen} onClose={onClose} /> */}
      </VStack>

      {/* ===== Go to schedule sheet button ===== */}
      <Portal hostName="AddPillScreenPortal">
        <View bg={'white'} px={6} paddingBottom={`${insets.bottom + 24}px`}>
          <Shadow
            distance={15}
            startColor={'#fff'}
            offset={[0, -10]}
            sides={{ top: true, end: false, bottom: false, start: false }}
            corners={{ topStart: false, topEnd: false, bottomStart: false, bottomEnd: false }}
            stretch={true}
          >
            <Button
              bg={'#1892FA'}
              height={'54px'}
              borderRadius={16}
              _pressed={{
                bg: '#1581df',
              }}
              _text={{
                fontSize: 'md',
                lineHeight: '20px',
                fontWeight: 700,
              }}
              _disabled={{
                bg: '#F4F4F5',
                opacity: 1,
                _text: {
                  color: '#C4CACF',
                },
              }}
              isDisabled={!isValid}
            >
              Go to next step
            </Button>
          </Shadow>
        </View>
      </Portal>
    </>
  );
};

export default PillDataForm;
