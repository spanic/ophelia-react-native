import { InterfaceHStackProps } from 'native-base/lib/typescript/components/primitives/Stack/HStack';
import { ReactElement } from 'react';
import { ScrollViewProps } from 'react-native';

export type HScrollableSelectorItemElement = ReactElement<IHScrollableSelectorItemProps>;

export interface IHorizontalScrollableSelectorProps {
  children: HScrollableSelectorItemElement | Array<HScrollableSelectorItemElement>;
  onSelect?: (id: string) => void;
  enableNativeGesturesSupport?: boolean;
  _scroll?: ScrollViewProps;
  _stack?: InterfaceHStackProps; // for inner HStack
}

export interface IHScrollableSelectorItemProps {
  id: string;
  isSelected?: boolean;
  selectionMark?: ReactElement;
  onSelect?: () => void;
  children: ((isSelected: boolean) => ReactElement) | ReactElement;
}
