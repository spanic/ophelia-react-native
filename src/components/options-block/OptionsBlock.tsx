import { Box, Divider, Pressable } from 'native-base';
import { FC, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { TickIcon } from 'src/components/Icons';
import InfoText from 'src/components/info-text/InfoText';
import {
  IOptionProps,
  IOptionsBlockProps,
} from 'src/components/options-block/types/OptionsBlock.types';

const OptionsBlock: FC<IOptionsBlockProps> = ({ data, selectedOptionId, onSelect, ...props }) => {
  return (
    <Box borderRadius={6} bg={'#F2F6F7'} overflow={'hidden'} {...props}>
      {data?.map(({ id, label }, index) => {
        return (
          <Option
            key={id}
            isLast={index === data.length - 1}
            selected={selectedOptionId === id}
            onSelect={() => onSelect(id)}
            label={label}
          />
        );
      })}
    </Box>
  );
};

const Option: FC<IOptionProps> = ({ isLast, label, selected, onSelect }) => {
  const opacity = useSharedValue<number>(0);
  const translate = useSharedValue<number>(0);

  const checkMarkStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const optionTextStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translate.value }],
    };
  });

  useEffect(() => {
    if (selected) {
      opacity.value = withDelay(50, withTiming(1, { duration: 100 }));
      translate.value = withSpring(30, { mass: 0.1 });
    } else {
      opacity.value = withTiming(0, { duration: 150 });
      translate.value = withDelay(50, withSpring(0, { mass: 0.1 }));
    }
  }, [selected]);

  return (
    <>
      <Pressable
        py={4}
        px={3}
        justifyContent={'center'}
        onPress={onSelect}
        _pressed={{ bg: '#ECEDEF' }}
      >
        <Animated.View style={[styles.checkMarkIcon, checkMarkStyles]}>
          <TickIcon />
        </Animated.View>
        <Animated.View style={[optionTextStyles]}>
          <InfoText color={'black'}>{label}</InfoText>
        </Animated.View>
      </Pressable>
      {!isLast && <Divider orientation={'horizontal'} />}
    </>
  );
};

const styles = StyleSheet.create({
  checkMarkIcon: {
    position: 'absolute',
    marginLeft: 12,
  },
});

export { OptionsBlock as default, Option };
