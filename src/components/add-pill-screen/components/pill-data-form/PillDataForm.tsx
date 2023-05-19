import { FormControl, useDisclose, VStack } from 'native-base';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import InfoText from 'src/components/info-text/InfoText';

import AddDoseActionSheet from './components/add-dose-action-sheet/AddDoseActionSheet';
import AddDoseButton from './components/add-dose-button/AddDoseButton';
import MultiLineInput from './components/multi-line-input/MultiLineInput';
import { IPillDataFormInput } from './types/PillDataForm.types';

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
          <FormControl.ErrorMessage>This field is required</FormControl.ErrorMessage>
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
