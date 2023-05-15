import { FC } from 'react';
import { FormControl, VStack, useDisclose } from 'native-base';
import { useForm } from 'react-hook-form';
import MultiLineInput from './components/multi-line-input/MultiLineInput';
import InfoText from '../../../info-text/InfoText';
import AddDoseActionSheet from './components/add-dose-controls/AddDoseControls';
import AddDoseButton from './components/add-dose-button/AddDoseButton';

export interface IPillDataFormInput {
  name: string;
}

const PillDataForm: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclose();

  const {
    control,
    formState: { errors },
  } = useForm<IPillDataFormInput>({
    mode: 'onChange',
    defaultValues: {},
  });

  return (
    <VStack space={10} marginTop={10} width="full">
      {/* ===== Medication name text input ===== */}
      <FormControl isInvalid={!!errors.name}>
        <FormControl.Label marginTop={-1}>
          <InfoText>Name</InfoText>
        </FormControl.Label>
        <MultiLineInput<IPillDataFormInput>
          controllerProps={{
            name: 'name',
            rules: {
              required: true,
            },
            control,
          }}
          placeholder='e. g. "Omega 3"'
        />
        {errors.name?.type === 'required' && (
          <FormControl.ErrorMessage marginTop={1}>
            <InfoText color={'red.400'}>This field is required</InfoText>
          </FormControl.ErrorMessage>
        )}
      </FormControl>

      {/* ===== Add dose button ===== */}
      <AddDoseButton onPress={onOpen} />

      {/* ===== Add dose form bottom action sheet ===== */}
      <AddDoseActionSheet isVisible={isOpen} onClose={onClose} />
    </VStack>
  );
};

export default PillDataForm;
