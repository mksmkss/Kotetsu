import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ParamList from './ParamList';

import Welcome from './screens/welcome';
import Auth from './screens/auth';
import Main from './screens/main';
import HelloWorld from './screens/HelloWorld';

const Stack = createNativeStackNavigator<ParamList>();
const RootNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="Auth" component={Auth} />
    <Stack.Screen name="Main" component={Main} />
    <Stack.Screen name="Hello World" component={HelloWorld} />
  </Stack.Navigator>
);

export default RootNavigator;
