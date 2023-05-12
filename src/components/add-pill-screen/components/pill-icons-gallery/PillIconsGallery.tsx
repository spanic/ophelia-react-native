import { FC, useMemo, useState } from 'react';
import { ImageSourcePropType } from 'react-native';
import { HStack, ScrollView } from 'native-base';
import PillIcon from './components/pill-icon/PillIcon';

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

  const [selectedIconKey, setSelectedIconKey] = useState<string>();

  return (
    <>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        marginX={-6}
        marginTop={9}
        _contentContainerStyle={{ px: 6, paddingTop: '9px', paddingBottom: '5px' }}
        flexGrow={0}
      >
        {
          <HStack space={6} alignItems="center" height="100%">
            {Object.entries(images).map(([key, image]) => {
              return (
                <PillIcon
                  key={key}
                  image={image}
                  isSelected={key === selectedIconKey}
                  onSelect={() => setSelectedIconKey(key)}
                />
              );
            })}
          </HStack>
        }
      </ScrollView>
    </>
  );
};

export default PillIconsGallery;
