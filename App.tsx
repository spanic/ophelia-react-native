import { Box, NativeBaseProvider } from 'native-base';
import { FontSource, useFonts } from 'expo-font';
import Header from './src/components/header/Header';

export default function App() {
  const [fontsLoaded] = useFonts({
    'SF-Pro-Display-Regular': require('./assets/fonts/SF-Pro-Display-Regular.otf') as FontSource,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NativeBaseProvider>
        <Box px={6} safeArea>
          <Header />
        </Box>
      </NativeBaseProvider>
    </>
  );
}
