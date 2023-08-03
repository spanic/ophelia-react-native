import { FontSource, useFonts } from 'expo-font';
import { extendTheme, NativeBaseProvider } from 'native-base';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AddPillScreen from 'src/components/add-pill-screen/AddPillScreen';
import HomeScreen from 'src/components/home-screen/HomeScreen';
import NavigationHeader from 'src/components/navigation-header/NavigationHeader';
import ScheduleScreen from 'src/components/schedule-screen/ScheduleScreen';
import { RootStackParamList } from 'src/types/Navigation';

import { PortalProvider } from '@gorhom/portal';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

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
    <NativeBaseProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <PortalProvider>
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Home" screenOptions={{ header: NavigationHeader }}>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="AddNewPill" component={AddPillScreen} />
                <Stack.Screen name={'Schedule'} component={ScheduleScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </PortalProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </NativeBaseProvider>
  );
}
