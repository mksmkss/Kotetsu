import * as React from 'react';
import {
  Text, ScrollView, TouchableOpacity, View,
} from 'react-native';

import RootNavigator from './nav';

import Providers from './provider';

import { navigate } from './nav/navigationRef';

import ControlPanel from './dev/ControlPanel';

// dev
const navButtons = [
  { name: 'Welcome', param: undefined },
  { name: 'Hello World', param: undefined },
  { name: 'Main', param: { screen: 'Notebook' } },
];
const App = () => (
  <Providers>
    <View style={{ flex: 1 }}>
      <RootNavigator />
    </View>
    {/* dev */}
    <View>
      <ScrollView horizontal>
        {navButtons.map((button) => (
          <TouchableOpacity
            onPress={() => navigate(button.name, button.param)}
            style={{ borderWidth: 1, padding: 5, margin: 5 }}
            key={button.name}
          >
            <Text>{button.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ControlPanel />
    </View>
  </Providers>
);

export default App;
