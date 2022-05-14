import * as React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { EPaper, Folders } from 'src/components';
import testdata from 'src/dev/testdata';

import ParamList from '../../ParamList';
import Buttons from '../../components/Buttons';

const { Text } = EPaper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  files: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 20,
  },

});

type NavigationProps = NativeStackScreenProps<ParamList, 'Units'>;
interface UnitsProps extends NavigationProps {}

const Units = (props: UnitsProps) => {
  const { route, navigation } = props;
  const { unitIDs } = route.params;
  const units = unitIDs.length === 0 ? {} : Object.assign(...unitIDs.map((key) => ({ [key]: testdata.units[key] })));

  return (
    <View style={styles.container}>
      <Buttons />
      <Folders
        contents={units}
        onPressCreator={(id) => {
          const navigationFunc = () => navigation.navigate('List', { name: units[id].name, elementIDs: units[id].elementIDs });
          return navigationFunc;
        }}
      />
    </View>
  );
};

export default Units;
