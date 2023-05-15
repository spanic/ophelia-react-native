import { NativeBaseProvider, extendTheme } from 'native-base';
import { FontSource, useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/components/home-screen/HomeScreen';
import AddPillScreen from './src/components/add-pill-screen/AddPillScreen';
import { RootStackParamList } from './src/types/Navigation';
import NavigationHeader from './src/components/add-pill-screen/components/navigation-header/NavigationHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PortalProvider } from '@gorhom/portal';

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
              <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen
                  name="AddNewPill"
                  component={AddPillScreen}
                  options={{
                    header: ({ navigation }) => (
                      <NavigationHeader
                        onPressBack={() => navigation.goBack()}
                        onPressClose={() => navigation.navigate('Home')}
                      />
                    ),
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </PortalProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </NativeBaseProvider>
  );
}
