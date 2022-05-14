import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Folder from './index';
import NullScreen from '../../nav/screens/main/screens/notebook/screens/NullScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  files: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 20,
  },
});

type onPressFunc = () => any
interface FoldersProps {
  contents: {
      [ID: string]: {
        name: string;
        [childIDs: string]: string[]
      }
  },
  onPressCreator: (id: string) => onPressFunc,
}

const Folders = (props: FoldersProps = { contents: {}, onPressCreator: () => console.log('aiueo') }) => {
  const { contents, onPressCreator } = props;
  const contentIDs = Object.keys(contents);
  return (
    <View style={{ flex: 1 }}>
      {contentIDs.length !== 0
        ? (
          <View style={styles.files}>
            {contentIDs.map((id) => (
              <Folder key={id} onPress={onPressCreator(id)} title={contents[id].name} />
            ))}
          </View>
        ) : <NullScreen />}
    </View>
  );
};

export default Folders;

/*
IDs : ['djafai', 'dkjaofai']
{ 'jfdaofi': { name: 'aif', }, 'fjaruqieofoj' }

*/
