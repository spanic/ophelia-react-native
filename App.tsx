import { Box, NativeBaseProvider, extendTheme } from 'native-base';
import { FontSource, useFonts } from 'expo-font';

import Header from './src/components/header/Header';
import DaySelect from './src/components/day-select/DaySelect';

export default function App() {
  const [fontsLoaded] = useFonts({
    'SF-Pro-Display-Regular': require('./assets/fonts/SF-Pro-Display-Regular.otf') as FontSource,
    'SF-Pro-Display-Semibold': require('./assets/fonts/SF-Pro-Display-Semibold.otf') as FontSource,
  });

  if (!fontsLoaded) {
    return null;
  }

  const theme = extendTheme({
    fontConfig: {
      'SF-Pro-Display': {
        400: {
          normal: 'SF-Pro-Display-Regular',
        },
        700: {
          normal: 'SF-Pro-Display-Semibold',
        },
      },
    },
    fonts: {
      heading: 'SF-Pro-Display',
      body: 'SF-Pro-Display',
      'SF-Pro-Display': 'SF-Pro-Display',
    },
  });

  return (
    <>
      <NativeBaseProvider theme={theme}>
        <Box px={6} safeArea>
          <Header />
          <DaySelect />
        </Box>
      </NativeBaseProvider>
    </>
  );
}
