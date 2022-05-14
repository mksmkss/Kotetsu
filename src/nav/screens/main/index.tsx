import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ParamList from './ParamList';

import Notebook from './screens/notebook';
import Progress from './screens/progress';
import Setting from './screens/setting';

const MainStack = createNativeStackNavigator<ParamList>();
const MainNavigator = () => (
  <MainStack.Navigator screenOptions={{ headerShown: false }}>
    <MainStack.Screen name="Notebook" component={Notebook} />
    <MainStack.Screen name="Progress" component={Progress} />
    <MainStack.Screen name="Setting" component={Setting} />
  </MainStack.Navigator>
);

export default MainNavigator;
