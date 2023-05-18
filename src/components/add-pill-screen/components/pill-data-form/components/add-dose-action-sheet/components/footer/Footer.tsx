import { BottomSheetFooter, BottomSheetFooterProps } from '@gorhom/bottom-sheet';
import { Button } from 'native-base';
import { FC } from 'react';
import { FOOTER_BUTTON_HEIGHT } from '../../constants/Constants';

const Footer: FC<BottomSheetFooterProps> = (props) => (
  <BottomSheetFooter {...props}>
    <Button
      margin={6}
      bg={'#1892FA'}
      borderRadius={16}
      h={`${FOOTER_BUTTON_HEIGHT}px`}
      _pressed={{
        bg: '#1581df',
      }}
      _text={{
        fontSize: 'md',
        lineHeight: '20px',
        fontWeight: 700,
      }}
    >
      Add
    </Button>
  </BottomSheetFooter>
);
export default Footer;
