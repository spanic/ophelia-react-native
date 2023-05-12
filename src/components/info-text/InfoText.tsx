import { FC } from 'react';
import { ITextProps, Text } from 'native-base';

const InfoText: FC<ITextProps> = ({ ...props }) => (
  <Text fontWeight={400} fontSize="md" color="#8C8E97" lineHeight="20" marginTop={3} {...props}>
    {props.children}
  </Text>
);

export default InfoText;
