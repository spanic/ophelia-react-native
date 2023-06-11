import { IKeyLabel } from 'src/types/Util.types';

export interface ITypesAndUnitsSelectorProps {
  value: TypeAndUnit;
  onChange: (value?: TypeAndUnit) => void;
}

export interface TypeAndUnit {
  typeId: string;
  unitId?: string;
}

export interface ITypesAndUnits extends IKeyLabel {
  units?: Array<IKeyLabel>;
}

export type TypesAndUnits = Array<ITypesAndUnits>;
