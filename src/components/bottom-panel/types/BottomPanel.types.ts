import { BottomSheetBackdropProps, BottomSheetProps } from '@gorhom/bottom-sheet';
import { ScrollViewProps } from 'react-native';

export interface IBottomPanelProps extends BottomSheetProps {
  isOpened: boolean;
  _scroll?: ScrollViewProps;
}

export interface IBackdropProps extends BottomSheetBackdropProps {
  onClose?: () => void;
}
