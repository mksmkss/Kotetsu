import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { EPaper } from 'src/components';
import testdata from 'src/dev/testdata';

import ParamList from '../../ParamList';
import NullScreen from '../NullScreen';
import Buttons from '../../components/Buttons';
import Element from './Element';

const { Text } = EPaper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

});

type NavigationProps = NativeStackScreenProps<ParamList, 'List'>
interface ListProps extends NavigationProps {}

const renderList = ({ name, elementIDs, navigation }:{name: string, elementIDs:string[], navigation:NavigationProps['navigation']}) => {
  const elements = Object.assign(...elementIDs.map((key) => ({ [key]: testdata.elements[key] })));
  return (
    <ScrollView>
      {elementIDs.map((elementID, index) => {
        const element = elements[elementID];
        return (
          <Element
            key={elementID}
            element={element}
            onPress={
              () => navigation.navigate('Detail', {
                element,
                isDrawerOpen: false
              })
            }
          />
        );
      })}
    </ScrollView>
  );
};

const List = (props: ListProps) => {
  const { navigation, route: { params: { name, elementIDs } } } = props;

  return (
    <View style={styles.container}>
      <Buttons />
      {elementIDs.length !== 0
        ? renderList({ name, elementIDs, navigation })
        : <NullScreen />}
    </View>
  );
};

export default List;
