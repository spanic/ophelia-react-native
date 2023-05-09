import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Actionsheet, ScrollView, Text, View, useDisclose } from 'native-base';
import moment from 'moment';
import * as Haptics from 'expo-haptics';

/**
 * "Select" component from NativeBase was not configurable enough for me,
 * hence I decided to implement it by myself
 */
const DaySelect: FC = () => {
  const [daysMapObj, setDaysMapObj] = useState<Map<string, string>>();
  const [chosenDay, setChosenDay] = useState<string>();
  const { isOpen, onOpen, onClose } = useDisclose();

  const rotateAnimation = useRef(new Animated.Value(0)).current;
  const rotate = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  useEffect(() => {
    const days: Array<string> = moment.weekdays(),
      daysMin: Array<string> = moment.weekdaysMin();
    const daysMap: Map<string, string> = days.reduce(
      (acc, day, idx) => acc.set(daysMin[idx], day),
      new Map<string, string>(),
    );
    setDaysMapObj(daysMap);

    const currentDayMin = moment().format('dd');
    setChosenDay(currentDayMin);
  }, []);

  const daysItems = useMemo(() => {
    if (!daysMapObj) return;

    return Array.from(daysMapObj.entries()).map(([key, name]) => (
      <Actionsheet.Item
        key={key}
        onPress={() => onChooseDay(key)}
        borderRadius="md"
        _pressed={{
          bg: '#E9F3E1',
        }}
      >
        {name}
      </Actionsheet.Item>
    ));
  }, [daysMapObj]);

  const openDaySelectionPanel = async (): Promise<void> => {
    await Haptics.selectionAsync();
    onOpen();
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const closeDaySelectionPanel = (): void => {
    onClose();
    Animated.timing(rotateAnimation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const onChooseDay = async (chosenDay: string): Promise<void> => {
    await Haptics.selectionAsync();
    setChosenDay(chosenDay);
    closeDaySelectionPanel();
  };

  return (
    <>
      <Pressable onPress={openDaySelectionPanel}>
        <View display="flex" flexDirection="row" alignItems="center">
          <Text fontSize="34" fontWeight="700" lineHeight="38">
            {daysMapObj?.get(chosenDay as string)}
          </Text>
          <Animated.View
            style={{
              transform: [{ rotateZ: rotate }],
              marginLeft: 8,
            }}
          >
            <ChevronDown />
          </Animated.View>
        </View>
      </Pressable>

      <Actionsheet isOpen={isOpen} onClose={closeDaySelectionPanel}>
        <Actionsheet.Content>
          <ScrollView w="100%">{daysItems}</ScrollView>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};

const ChevronDown: FC = () => (
  <Svg width={18} height={18} fill="none">
    <Path
      fill="#191D30"
      d="M4.707 5.793a1 1 0 0 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0-1.414-1.414L9 10.086 4.707 5.793Z"
    />
  </Svg>
);

export default DaySelect;
