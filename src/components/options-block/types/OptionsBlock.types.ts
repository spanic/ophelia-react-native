import { IBoxProps } from 'native-base';

import { IKeyLabel } from 'src/types/Util.types';

export interface IOptionsBlockProps extends IBoxProps {
  data: Array<IKeyLabel>;
  selectedOptionId: IKeyLabel['id'] | undefined;
  onSelect: (value: string | undefined) => void;
}

export interface IOptionProps extends Omit<IKeyLabel, 'id'> {
  isLast: boolean;
  selected: boolean;
  onSelect: () => void;
}
