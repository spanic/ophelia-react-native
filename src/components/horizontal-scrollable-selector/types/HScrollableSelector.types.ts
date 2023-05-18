import { ReactElement } from 'react';
import { ScrollViewProps } from 'react-native';
import { InterfaceHStackProps } from 'native-base/lib/typescript/components/primitives/Stack/HStack';

export type HScrollableSelectorItemElement = ReactElement<IHScrollableSelectorItemProps>;

export interface IHorizontalScrollableSelectorProps extends ScrollViewProps {
  children: HScrollableSelectorItemElement | Array<HScrollableSelectorItemElement>;
  onSelect?: (id: string) => void;
  enableNativeGesturesSupport?: boolean;
  _stack?: InterfaceHStackProps; // for inner HStack
}

export interface IHScrollableSelectorItemProps {
  id: string;
  isSelected?: boolean;
  selectionMark?: ReactElement;
  onSelect?: () => void;
  children: ((isSelected: boolean) => ReactElement) | ReactElement;
}
