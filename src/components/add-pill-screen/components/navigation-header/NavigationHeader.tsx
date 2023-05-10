import { Box, Pressable, View } from 'native-base';
import { FC } from 'react';

import Svg, { Path } from 'react-native-svg';

interface INavigationHeaderProps {
  onPressBack?: () => void;
  onPressClose?: () => void;
}

const NavigationHeader: FC<INavigationHeaderProps> = ({ onPressBack, onPressClose }) => {
  return (
    <Box safeArea>
      <View
        h="44px"
        display="flex"
        flexDir="row"
        justifyContent="space-between"
        alignItems="center"
        px="6"
      >
        <Pressable hitSlop={{ top: 12, left: 24, right: 24, bottom: 12 }} onPress={onPressBack}>
          <Svg width={11} height={20} fill="none">
            <Path
              fill="#191D30"
              fillRule="evenodd"
              d="M10.607.807a1 1 0 0 0-1.415 0L1.414 8.585a2 2 0 0 0 0 2.829l7.778 7.778a1 1 0 0 0 1.414-1.414L2.829 9.999l7.779-7.778a1 1 0 0 0 0-1.414Z"
              clipRule="evenodd"
            />
          </Svg>
        </Pressable>
        <Pressable hitSlop={{ top: 14, left: 20, right: 24, bottom: 14 }} onPress={onPressClose}>
          <Svg width={16} height={16} fill="none">
            <Path
              stroke="#191D30"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1.668 1.669 12.664 12.663m-12.663 0L14.33 1.669"
            />
          </Svg>
        </Pressable>
      </View>
    </Box>
  );
};

export default NavigationHeader;
