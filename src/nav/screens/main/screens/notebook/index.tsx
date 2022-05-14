import * as React from 'react';
import { TouchableOpacity, LayoutAnimation } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { withTheme } from 'react-native-paper';

import { Icon } from 'src/components/Icon';
import { Theme } from 'src/interface';
import ParamList from './ParamList';
import Subjects from './screens/Subjects';
import Units from './screens/Units';
import List from './screens/List';
import Detail from './screens/Detail';
import NullScreen from './screens/NullScreen';

const NotebookStack = createNativeStackNavigator<ParamList>();

interface NavigatorProps{
  theme: Theme
}

const NotebookNavigator = (props:NavigatorProps) => {
  const { theme: { colors: { text } } } = props;
  return (
    <NotebookStack.Navigator>
      <NotebookStack.Screen name="Subjects" component={Subjects} />
      <NotebookStack.Screen
        name="Units"
        component={Units}
        options={({ route }) => ({ title: route.params.name })}
      />
      <NotebookStack.Screen
        name="List"
        component={List}
        options={({ route }) => ({ title: route.params.name })}
      />
      <NotebookStack.Screen
        name="Detail"
        component={Detail}
        options={({ route, navigation }) => ({
          title: '',
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => (
            <TouchableOpacity
              onPress={() => [
                navigation.setParams({ isDrawerOpen: !route.params.isDrawerOpen }),
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut),
              ]}
            >
              <Icon.Ionicons name="ios-information-circle-outline" size={30} color={text} />
            </TouchableOpacity>
          ),
        })}
      />

    </NotebookStack.Navigator>
  );
};

export default withTheme(NotebookNavigator);
/*

<~~ Navigator>
NotebookStack.Navigator
</~~ Navigator>

*/
