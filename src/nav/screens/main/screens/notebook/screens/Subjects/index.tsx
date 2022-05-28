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

type NavigationProps = NativeStackScreenProps<ParamList, 'Subjects'>
interface SubjectsProps extends NavigationProps { }

const Subjects = (props: SubjectsProps) => {
  const subjects = testdata.subject; // 後々subjectsをfirebaseで取ってくるように変える
  const [screenWidth, setScreenWidth] = React.useState(1);
  const { navigation } = props;
  return (
    <View
      style={styles.container}
      onLayout={({ nativeEvent }) => setScreenWidth(nativeEvent.layout.width)}
    >
      <Buttons />
      <Folders
        contents={subjects}
        screenWidth={screenWidth}
        onPressCreator={(id) => {
          const navigationFunc = () => navigation.navigate('Units', {
            name: subjects[id].name,
            unitIDs: subjects[id].unitIDs,
          });
          return navigationFunc;
        }}
      />
    </View>
  );
};

export default Subjects;
