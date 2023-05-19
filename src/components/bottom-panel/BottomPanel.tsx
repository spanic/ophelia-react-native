import { FC, ReactNode, useCallback, useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { Portal } from '@gorhom/portal';
import Backdrop from './components/backdrop/Backdrop';
import { IBottomPanelProps } from './types/BottomPanel.types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

const BottomPanel: FC<IBottomPanelProps> = ({
  snapPoints,
  isOpened,
  onClose,
  footerComponent,
  _scroll,
  children,
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (bottomSheetRef.current) {
      if (isOpened) {
        bottomSheetRef.current.snapToIndex(0);
      } else {
        bottomSheetRef.current.close();
      }
    }
  }, [isOpened, bottomSheetRef.current]);

  const backdropRenderFn = useCallback(
    (props: BottomSheetBackdropProps) => <Backdrop onClose={onClose} {...props} />,
    [],
  );

  return (
    <Portal>
      <BottomSheet
        style={styles.bottomSheet}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        keyboardBlurBehavior="restore"
        enablePanDownToClose={true}
        enableContentPanningGesture={false}
        index={-1 /* Closed */}
        topInset={insets.top}
        backdropComponent={backdropRenderFn}
        footerComponent={footerComponent}
        onClose={onClose}
      >
        <ScrollView style={_scroll?.style} {..._scroll}>
          {children as ReactNode}
        </ScrollView>
      </BottomSheet>
    </Portal>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    flex: 1,
  },
});

export default BottomPanel;
