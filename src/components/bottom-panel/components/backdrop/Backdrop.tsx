import { FC } from 'react';

import { BottomSheetBackdrop } from '@gorhom/bottom-sheet';

import { IBackdropProps } from '../../types/BottomPanel.types';

const Backdrop: FC<IBackdropProps> = ({ onClose, ...props }) => (
  <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} onPress={onClose} />
);

export default Backdrop;
