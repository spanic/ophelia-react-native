import { ITextProps, Text } from 'native-base';
import { FC } from 'react';

const InfoText: FC<ITextProps> = ({ ...props }) => (
  <Text fontWeight={400} fontSize="md" color="#8C8E97" lineHeight="20" {...props}>
    {props.children}
  </Text>
);

export default InfoText;
