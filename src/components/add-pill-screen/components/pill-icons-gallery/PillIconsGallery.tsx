import { Circle, FormControl, Image } from 'native-base';
import { FC, useMemo } from 'react';
import { ImageSourcePropType } from 'react-native';

import HScrollableSelector, {
  HScrollableItemSelectionMark,
  HScrollableSelectorItem,
} from 'src/components/horizontal-scrollable-selector/HScrollableSelector';
import InfoText from 'src/components/info-text/InfoText';

const PillIconsGallery: FC = () => {
  const images: { [key: string]: ImageSourcePropType } = useMemo(() => {
    return {
      'pink-pill': require('ophelia/assets/medications-icons/pink-pill.png') as ImageSourcePropType,
      'orange-tube':
        require('ophelia/assets/medications-icons/orange-tube.png') as ImageSourcePropType,
      'white-blue-pill':
        require('ophelia/assets/medications-icons/white-blue-pill.png') as ImageSourcePropType,
      'green-jar': require('ophelia/assets/medications-icons/green-jar.png') as ImageSourcePropType,
      'yellow-green-pills':
        require('ophelia/assets/medications-icons/yellow-green-pills.png') as ImageSourcePropType,
      'nasal-drops':
        require('ophelia/assets/medications-icons/nasal-drops.png') as ImageSourcePropType,
      'blue-pill': require('ophelia/assets/medications-icons/blue-pill.png') as ImageSourcePropType,
      'nasal-spray':
        require('ophelia/assets/medications-icons/nasal-spray.png') as ImageSourcePropType,
      'blue-tube': require('ophelia/assets/medications-icons/blue-tube.png') as ImageSourcePropType,
    };
  }, []);

  return (
    <>
      <FormControl marginTop={9}>
        <FormControl.Label>
          <InfoText>Choose icon</InfoText>
        </FormControl.Label>
        <HScrollableSelector _scroll={{ style: { flexGrow: 0, marginTop: 3 } }}>
          {Object.entries(images).map(([key, value], index) => (
            <HScrollableSelectorItem
              key={key}
              id={key}
              isSelected={index === 0}
              selectionMark={<HScrollableItemSelectionMark />}
            >
              <Circle bg="#F2F6F7" size={16} p="15px">
                <Image height="100%" alt="" resizeMode="contain" source={value}></Image>
              </Circle>
            </HScrollableSelectorItem>
          ))}
        </HScrollableSelector>
      </FormControl>
    </>
  );
};

export default PillIconsGallery;
