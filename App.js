import { Button, Image } from 'react-native';
import React, { Component } from 'react';

import AppStyles from './AppStyle';
import ContactScreen from './pages/ContactPage/Screen';
import HomeScreen from './pages/HomePage/Screen';
import LoginScreen from './pages/LoginPage/Screen';
import { NavigationContainer } from '@react-navigation/native';
import NewsDetailScreen from './pages/NewsDetailPage/Screen';
import NewsScreen from './pages/NewsPage/Screen';
import SplashScreen from './pages/SplashPage/Screen';
import { createStackNavigator } from '@react-navigation/stack';

class App extends Component {
  
  render() {
    const Stack = createStackNavigator();
    function LogoTitle() {
      return (
        <Image
          style={{ width: 176, height: 40 }}
          source={require('./assets/header_image.png')}
        />
      );
    }
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="NewsScreen">
        <Stack.Screen options={{headerShown: false}} name="SplashScreen" component={SplashScreen} />
        <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen options={{headerShown: true}} options={{ headerTitle: props => <LogoTitle {...props} />, headerLeft: ()=> null}}  name="HomeScreen" component={HomeScreen} />
        <Stack.Screen options={{headerShown: false}} name="ContactScreen" component={ContactScreen} />
        <Stack.Screen options={{headerShown: true}} name="NewsScreen" component={NewsScreen} />
        <Stack.Screen options={{headerShown: true}} name="NewsDetailScreen" component={NewsDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}
export default App;