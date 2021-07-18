import React, { Component } from 'react';
import AppStyles from './AppStyle';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './pages/LoginPage/Screen';
import SplashScreen from './pages/SplashPage/Screen';
import HomeScreen from './pages/HomePage/Screen';
class App extends Component {
  
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen options={{headerShown: false}} name="SplashScreen" component={SplashScreen} />
        <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}
export default App;