import { TypeAndUnit } from '../components/pill-type-and-unit-selector/types/TypeAndUnitSelector.types';

export interface IPillDataFormProps {
  onPressNext?: () => void;
}

export interface IPillDataFormInput {
  name: string;
  typeAndUnit: TypeAndUnit;
}
