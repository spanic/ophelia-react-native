import { FC } from 'react';
import { BottomSheetBackdrop, BottomSheetBackdropProps } from '@gorhom/bottom-sheet';

export interface IBackdropProps extends BottomSheetBackdropProps {
  onClose: () => void;
}

const Backdrop: FC<IBackdropProps> = ({ onClose, ...props }) => (
  <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} onPress={onClose} />
);

export default Backdrop;
