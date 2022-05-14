import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { EPaper } from 'src/components';
import ParamList from '../../ParamList';

const { Text } = EPaper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    opacity: 0.5,
  },
});

const NullScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {'Let\'s add from the above plus button! '}
    </Text>
  </View>
);

export default NullScreen;
