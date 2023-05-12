import { FC, memo, useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Easing, ImageSourcePropType, Pressable } from 'react-native';
import { Box, Circle, Image } from 'native-base';
import { SelectedIcon } from '../../../../../Icons';
import * as Haptics from 'expo-haptics';

export interface IPillIconProps {
  image: ImageSourcePropType;
  isSelected?: boolean;
  onSelect?: () => void;
}

const PillIcon: FC<IPillIconProps> = memo(({ image, isSelected, onSelect }) => {
  const [isTouched, setTouched] = useState<boolean>();

  const scale = useRef(new Animated.Value(1)).current;

  const increaseScale = (): void =>
    Animated.timing(scale, {
      toValue: 1.15,
      duration: 300,
      useNativeDriver: true,
      easing: Easing.elastic(2),
    }).start();

  const decreaseScale = (): void =>
    Animated.timing(scale, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

  const opacity = useRef(new Animated.Value(0)).current;

  const revealCheckMark = (): void =>
    Animated.timing(opacity, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();

  const hideCheckMark = (): void =>
    Animated.timing(opacity, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();

  useEffect(() => {
    if (!isSelected && isTouched) {
      decreaseScale();
      hideCheckMark();
    }
  }, [isSelected]);

  const selectIcon = useCallback(async (): Promise<void> => {
    await Haptics.selectionAsync();
    onSelect?.();
    setTouched(true);
    increaseScale();
    revealCheckMark();
  }, [onSelect]);

  return (
    <Pressable onPress={selectIcon}>
      <Animated.View style={{ zIndex: 1, opacity }}>
        <Box
          h="18px"
          w="18px"
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
          alignSelf="flex-end"
          top="-4px"
          rounded="full"
          bg="#67B779"
        >
          <SelectedIcon />
        </Box>
      </Animated.View>

      <Animated.View
        style={{
          transform: [{ scale }],
        }}
      >
        <Circle bg="#F2F6F7" size={16} p="15px">
          <Image height="100%" alt="Pink pill" resizeMode="contain" source={image}></Image>
        </Circle>
      </Animated.View>
    </Pressable>
  );
});

export default PillIcon;
