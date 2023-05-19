import { ITextProps, Text } from 'native-base';
import { FC } from 'react';

const HeaderText: FC<ITextProps> = (props) => (
  <Text fontSize="34" fontWeight="700" lineHeight="38" {...props}>
    {props.children}
  </Text>
);

export default HeaderText;
