import { Text } from 'native-base';
import { FC, useMemo } from 'react';

import { ITypesAndUnitsSelectorProps, TypesAndUnits } from './types/TypeAndUnitSelector.types';

const TypeAndUnitSelector: FC<ITypesAndUnitsSelectorProps> = () => {
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

  return <Text>Types and units selector</Text>;
};

export default TypeAndUnitSelector;
