import { Box, Text } from 'native-base';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <Box h="44" justifyContent="center">
      <Text fontFamily="SF-Pro-Display-Regular" fontSize="md" color="#8C8E97" lineHeight="20">
        Hello, Andrei!
      </Text>
    </Box>
  );
};

export default Header;
