import { FC } from 'react';
import { ITextProps, Text } from 'native-base';

const HeaderText: FC<ITextProps> = (props) => (
  <Text fontSize="34" fontWeight="700" lineHeight="38" {...props}>
    {props.children}
  </Text>
);

export default HeaderText;
