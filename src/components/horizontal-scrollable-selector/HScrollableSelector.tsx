import {
  FC,
  cloneElement,
  useMemo,
  useState,
  Children,
  useRef,
  useEffect,
  useCallback,
  memo,
} from 'react';
import { Animated, Easing, Pressable, ScrollView, StyleSheet } from 'react-native';
import { Box, HStack } from 'native-base';
import { ScrollView as NativeGestureScrollView } from 'react-native-gesture-handler';
import { SelectedIcon } from '../Icons';
import { InterfaceBoxProps } from 'native-base/lib/typescript/components/primitives/Box';
import {
  HScrollableSelectorItemElement,
  IHScrollableSelectorItemProps,
  IHorizontalScrollableSelectorProps,
} from './types/HScrollableSelector.types';

/**
 * Scrollable selector
 * *******************
 */

const HScrollableSelector: FC<IHorizontalScrollableSelectorProps> = ({
  children,
  onSelect,
  enableNativeGesturesSupport,
  _stack,
  _scroll,
}) => {
  const initiallySelectedItemId = useMemo<string | undefined>(
    () =>
      (Children.toArray(children) as HScrollableSelectorItemElement[]).find(
        (child) => !!child.props.isSelected,
      )?.props.id,
    [],
  );

  const [selectedItemId, setSelectedItemId] = useState<string | undefined>(initiallySelectedItemId);

  const ScrollViewComponent = useMemo(() => {
    return enableNativeGesturesSupport ? NativeGestureScrollView : ScrollView;
  }, [enableNativeGesturesSupport]);

  const scrollViewComponentStyles = useMemo(
    () => StyleSheet.compose(styles.scrollWrapper, _scroll?.style),
    [_scroll?.style],
  );

  const childSelectorItems = Children.map(children, (child) =>
    cloneElement(child, {
      isSelected: selectedItemId === child.props.id,
      onSelect: () => onSelectItem(child.props.id),
    }),
  );

  const onSelectItem = (selectedItemId: string): void => {
    setSelectedItemId(selectedItemId);
    onSelect?.(selectedItemId);
  };

  return (
    <ScrollViewComponent
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
      {..._scroll}
      style={scrollViewComponentStyles}
    >
      <HStack space={6} alignItems="center" height="100%" paddingY={1} {..._stack}>
        {childSelectorItems}
      </HStack>
    </ScrollViewComponent>
  );
};

const styles = StyleSheet.create({
  scrollWrapper: {
    marginHorizontal: -24,
  },
  scrollContainer: {
    paddingHorizontal: 24,
  },
});

/**
 * Scrollable Selector Item
 * ************************
 */

const HScrollableSelectorItem: FC<IHScrollableSelectorItemProps> = ({
  children,
  isSelected,
  selectionMark,
  onSelect,
}) => {
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
    if (!isSelected) {
      if (isTouched) {
        decreaseScale();
        hideCheckMark();
      }
    } else {
      selectItem();
    }
  }, [isSelected]);

  const selectItem = useCallback((): void => {
    onSelect?.();
    setTouched(true);
    increaseScale();
    revealCheckMark();
  }, [onSelect]);

  return (
    <Pressable onPress={selectItem}>
      {selectionMark && (
        <Animated.View style={{ zIndex: 1, opacity }}>{selectionMark}</Animated.View>
      )}

      <Animated.View
        style={{
          transform: [{ scale }],
        }}
      >
        {typeof children === 'function' ? children(!!isSelected) : children}
      </Animated.View>
    </Pressable>
  );
};

const HScrollableItemSelectionMark: FC = memo((props: InterfaceBoxProps) => {
  return (
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
      {...props}
    >
      <SelectedIcon />
    </Box>
  );
});

export { HScrollableSelector as default, HScrollableSelectorItem, HScrollableItemSelectionMark };
