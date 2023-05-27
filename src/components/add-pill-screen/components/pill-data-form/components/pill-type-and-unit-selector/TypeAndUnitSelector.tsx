import { FC, useMemo, useState } from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';

import OptionsBlock from 'src/components/options-block/OptionsBlock';

import { ITypesAndUnits, TypesAndUnits } from './types/TypeAndUnitSelector.types';

const TypeAndUnitSelector: FC = () => {
  const pillTypesAndMeasurements: TypesAndUnits = useMemo(() => {
    return [
      {
        id: 'pill',
        label: 'Pill, tablet, capsule',
      },
      {
        id: 'powder',
        label: 'Powder',
        units: [
          {
            id: 'mg',
            label: 'mg',
          },
          {
            id: 'sachet',
            label: 'Sachet / pack',
          },
          {
            id: 'spoon',
            label: 'Teaspoon',
          },
        ],
      },
    ];
  }, []);

  const [selectedType, setSelectedType] = useState<string>();
  const [selectedUnit, setSelectedUnit] = useState<string>();

  const unitsForSelectedType: ITypesAndUnits['units'] | undefined = useMemo(() => {
    if (!selectedType) {
      return;
    }
    setSelectedUnit(undefined);
    return pillTypesAndMeasurements?.find(({ id }) => id === selectedType)?.units;
  }, [pillTypesAndMeasurements, selectedType]);

  return (
    <>
      <OptionsBlock
        data={pillTypesAndMeasurements}
        selectedOptionId={selectedType}
        onSelect={setSelectedType}
      />

      {unitsForSelectedType && (
        <Animated.View entering={FadeInDown}>
          <OptionsBlock
            data={unitsForSelectedType}
            selectedOptionId={selectedUnit}
            onSelect={setSelectedUnit}
            marginTop={4}
          />
        </Animated.View>
      )}
    </>
  );
};

export default TypeAndUnitSelector;
