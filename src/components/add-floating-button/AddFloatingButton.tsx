import { Fab } from 'native-base';
import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

interface IAddFloatingButtonProps {
  onPress?: () => void;
}

const AddFloatingButton: FC<IAddFloatingButtonProps> = ({ onPress }) => {
  return (
    <Fab
      bg="#1892FA"
      icon={
        <Svg width={24} height={24} fill="none">
          <Path stroke="#fff" strokeLinecap="round" strokeWidth={3} d="M5 12h14m-7 7V5" />
        </Svg>
      }
      right="4"
      bottom="8"
      shadow="0"
      _pressed={{
        bg: '#1581df',
      }}
      renderInPortal={false}
      onPress={onPress}
    />
  );
};

export default AddFloatingButton;
