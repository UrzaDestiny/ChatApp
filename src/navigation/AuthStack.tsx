import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import { RootStackParamList } from '../types/RootStackParamList';

const Stack = createStackNavigator<RootStackParamList>();

const AuthStack: React.FC = () => {
  const screenOptions: StackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={screenOptions}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
