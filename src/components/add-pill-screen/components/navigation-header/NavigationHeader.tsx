import { Pressable, View } from 'native-base';
import { FC } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CloseIcon, GoBackChevronIcon } from 'src/components/Icons';

interface INavigationHeaderProps {
  onPressBack?: () => void;
  onPressClose?: () => void;
}

const NavigationHeader: FC<INavigationHeaderProps> = ({ onPressBack, onPressClose }) => {
  const insets = useSafeAreaInsets();

  return (
    <View paddingTop={insets.top} bg="white">
      <View
        h="44px"
        display="flex"
        flexDir="row"
        justifyContent="space-between"
        alignItems="center"
        px="6"
      >
        <Pressable hitSlop={{ top: 10, left: 24, right: 12, bottom: 10 }} onPress={onPressBack}>
          <GoBackChevronIcon />
        </Pressable>
        <Pressable hitSlop={{ top: 10, left: 24, right: 24, bottom: 10 }} onPress={onPressClose}>
          <CloseIcon />
        </Pressable>
      </View>
    </View>
  );
};

export default NavigationHeader;
