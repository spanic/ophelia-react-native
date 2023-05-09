import { FC } from 'react';
import { Box, Text } from 'native-base';

const Header: FC = () => {
  return (
    <Box h="44" justifyContent="center">
      <Text fontWeight={400} fontSize="md" color="#8C8E97" lineHeight="20">
        Hello, Andrei!
      </Text>
    </Box>
  );
};

export default Header;
