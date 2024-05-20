import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Home from './src/views/Home';
import Login from './src/views/Login';
import Register from './src/views/Register';
import APIsScreen from './src/components/APIsScreen';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" options={{ headerShown: false }} component={Home}/>
        <Stack.Screen name="login" options={{ headerShown: false }} component={Login}/>
        <Stack.Screen name="register" options={{ headerShown: false }} component={Register}/>
        <Stack.Screen name="apiscreen" options={{ headerShown: false }} component={APIsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style="auto" />
    </>
  );
}