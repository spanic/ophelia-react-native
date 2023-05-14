import { FC } from 'react';
import {
  Actionsheet,
  Circle,
  FormControl,
  HStack,
  Pressable,
  VStack,
  useDisclose,
} from 'native-base';
import { useForm } from 'react-hook-form';
import { PlusIcon } from '../../../../../Icons';
import InfoText from '../../../../../info-text/InfoText';
import MultiLineInput from '../multi-line-input/MultiLineInput';

export interface IAddDoseFormInput {
  dose: string;
}

const AddDoseControls: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclose();

  const {
    control,
    formState: { errors },
  } = useForm<IAddDoseFormInput>({
    mode: 'onChange',
    defaultValues: {},
  });

  return (
    <>
      <Pressable onPress={onOpen}>
        <HStack alignItems={'center'} space={3} alignSelf={'flex-start'}>
          <Circle size={12} bg={'#F2F6F7'}>
            <PlusIcon />
          </Circle>
          <InfoText color={'black'}>Add dose</InfoText>
        </HStack>
      </Pressable>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <VStack space={4} width={'full'}>
            <FormControl>
              <FormControl.Label marginTop={-1}>
                <InfoText>Name</InfoText>
              </FormControl.Label>
              <MultiLineInput<IAddDoseFormInput>
                controllerProps={{
                  name: 'dose',
                  control,
                }}
                placeholder='e. g. "one pill"'
              />
            </FormControl>
          </VStack>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};

export default AddDoseControls;
