import { View } from 'native-base';
import { FC, useCallback, useMemo } from 'react';
import InfoText from '../../../../../../../info-text/InfoText';
import HScrollableSelector, {
  HScrollableSelectorItem,
} from '../../../../../../../horizontal-scrollable-selector/HScrollableSelector';

export interface IMealTimeOptionsSelectorProps {
  onSelect?: (id: string) => void;
}

const MealTimeOptionsSelector: FC<IMealTimeOptionsSelectorProps> = ({ onSelect }) => {
  const mealTimeOptionsMap: { [key: string]: string } = useMemo(() => {
    return {
      nevermind: 'Nevermind',
      before_meal: 'Before meal',
      when_meal: 'When meal',
      after_meal: 'After meal',
    };
  }, []);

  const innerElementRenderFn = useCallback(
    (value: string, selected: boolean) => (
      <View bg={selected ? '#E9F3E1' : '#F2F6F7'} px={'20px'} py={'7px'} borderRadius={'full'}>
        <InfoText color={'#191D30'} {...(selected ? { fontWeight: '700' } : null)}>
          {value}
        </InfoText>
      </View>
    ),
    [],
  );

  return (
    <HScrollableSelector _stack={{ space: 4 }} onSelect={onSelect}>
      {Object.entries(mealTimeOptionsMap).map(([key, value], index) => (
        <HScrollableSelectorItem key={key} id={key} isSelected={index === 0}>
          {(selected) => innerElementRenderFn(value, selected)}
        </HScrollableSelectorItem>
      ))}
    </HScrollableSelector>
  );
};

export default MealTimeOptionsSelector;
