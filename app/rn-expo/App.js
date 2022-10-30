import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomWebview from './src/components/CustomWebview';
import HomeScreen from './src/components/screen/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ gestureEnabled: true, headerShown: false }}
        />

        <Stack.Screen
          name='Custom'
          component={CustomWebview}
          options={{ gestureEnabled: true, title: 'custom' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
