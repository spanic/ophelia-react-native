import { IKeyLabel } from 'src/types/Util.types';

export interface ITypesAndUnits extends IKeyLabel {
  units?: Array<IKeyLabel>;
}

export type TypesAndUnits = Array<ITypesAndUnits>;
