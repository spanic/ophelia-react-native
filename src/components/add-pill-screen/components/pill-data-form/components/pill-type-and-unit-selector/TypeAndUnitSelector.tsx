import { FC, useEffect, useMemo, useState } from 'react';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';

import InfoText from 'src/components/info-text/InfoText';
import OptionsBlock from 'src/components/options-block/OptionsBlock';

import {
  ITypesAndUnitsSelectorProps,
  TypeAndUnit,
  TypesAndUnits,
} from './types/TypeAndUnitSelector.types';

const TypeAndUnitSelector: FC<ITypesAndUnitsSelectorProps> = ({ onChange }) => {
  const sourceTypesAndUnits: TypesAndUnits = useMemo(() => {
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

  const unitsForSelectedType = useMemo(() => {
    if (!selectedType) {
      return;
    }
    return sourceTypesAndUnits?.find(({ id }) => id === selectedType)?.units;
  }, [sourceTypesAndUnits, selectedType]);

  useEffect(() => {
    setSelectedUnit(undefined);
  }, [unitsForSelectedType]);

  useEffect(() => {
    let value: TypeAndUnit | undefined;
    if (selectedType && (selectedUnit || !unitsForSelectedType?.length)) {
      value = { typeId: selectedType, unitId: selectedUnit };
    }
    onChange(value);
  }, [selectedType, selectedUnit]);

  return (
    <>
      <OptionsBlock
        data={sourceTypesAndUnits}
        selectedOptionId={selectedType}
        onSelect={setSelectedType}
      />

      {unitsForSelectedType && (
        <Animated.View entering={FadeInDown} exiting={FadeOutDown}>
          <InfoText marginTop={4} marginBottom={1}>
            Unit
          </InfoText>
          <OptionsBlock
            data={unitsForSelectedType}
            selectedOptionId={selectedUnit}
            onSelect={setSelectedUnit}
          />
        </Animated.View>
      )}
    </>
  );
};

export default TypeAndUnitSelector;
