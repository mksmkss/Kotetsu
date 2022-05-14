import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ParamList from './ParamList';

import ForgotPassword from './screens/ForgotPassword';
import Login from './screens/Login';
import Signup from './screens/Signup';

const AuthStack = createNativeStackNavigator<ParamList>();
const AuthNavigator = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Sign Up" component={Signup} />
    <AuthStack.Screen name="Log in" component={Login} />
    <AuthStack.Screen name="Forgot Password" component={ForgotPassword} />
  </AuthStack.Navigator>
);

export default AuthNavigator;
