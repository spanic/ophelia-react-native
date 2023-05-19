import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { Animated } from 'react-native';
import { Actionsheet, Pressable, View, useDisclose } from 'native-base';
import moment from 'moment';
import * as Haptics from 'expo-haptics';
import { ChevronDownSelectIcon } from '../Icons';
import HeaderText from '../header-text/HeaderText';
import BottomPanel from '../bottom-panel/BottomPanel';

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
        bg={'white'}
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
      <Pressable onPress={openDaySelectionPanel} marginTop={3}>
        <View display="flex" flexDirection="row" alignItems="center">
          <HeaderText>{daysMapObj?.get(chosenDay as string)}</HeaderText>
          <Animated.View
            style={{
              transform: [{ rotateZ: rotate }],
              marginLeft: 8,
            }}
          >
            <ChevronDownSelectIcon />
          </Animated.View>
        </View>
      </Pressable>

      <BottomPanel snapPoints={['50%']} isOpened={isOpen} onClose={closeDaySelectionPanel}>
        {daysItems}
      </BottomPanel>
    </>
  );
};

export default DaySelect;
