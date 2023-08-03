import { Circle, HStack, Pressable } from 'native-base';
import { FC, memo } from 'react';

import { PlusIcon } from 'src/components/Icons';
import InfoText from 'src/components/info-text/InfoText';

export interface IAddDoseButtonProps {
  onPress: () => void;
}

const AddDoseButton: FC<IAddDoseButtonProps> = memo(({ onPress }) => {
  return (
    <Pressable marginTop={9} onPress={onPress}>
      <HStack alignItems={'center'} space={3} alignSelf={'flex-start'}>
        <Circle size={12} bg={'#F2F6F7'}>
          <PlusIcon />
        </Circle>
        <InfoText color={'black'}>Add dose</InfoText>
      </HStack>
    </Pressable>
  );
});

export default AddDoseButton;
