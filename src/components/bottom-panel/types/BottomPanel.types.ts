import { ScrollViewProps } from 'react-native';

import { BottomSheetBackdropProps, BottomSheetProps } from '@gorhom/bottom-sheet';

export interface IBottomPanelProps extends BottomSheetProps {
  isOpened: boolean;
  _scroll?: ScrollViewProps;
}

export interface IBackdropProps extends BottomSheetBackdropProps {
  onClose?: () => void;
}
