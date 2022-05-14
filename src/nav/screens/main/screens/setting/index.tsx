import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ParamList from './ParamList';

import Account from './screens/Account';
import Appearance from './screens/Appearance';
import Help from './screens/Help';

const SettingStack = createNativeStackNavigator<ParamList>();

const SettingNavigator = () => (
  <SettingStack.Navigator screenOptions={{ headerShown: false }}>
    <SettingStack.Screen name="Account" component={Account} />
    <SettingStack.Screen name="Appearance" component={Appearance} />
    <SettingStack.Screen name="Help" component={Help} />
  </SettingStack.Navigator>
);

export default SettingNavigator;
