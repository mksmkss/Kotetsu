import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { EPaper } from 'src/components';

import ParamList from '../ParamList';

const { Text } = EPaper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type NavigationProps = NativeStackScreenProps<ParamList, 'Sign Up'>;
interface SignupProps extends NavigationProps {}

const Signup = (props: SignupProps) => {
  const { } = props;
  return (
    <View style={styles.container}>
      <Text>This is Signup screen!</Text>
    </View>
  );
};

export default Signup;
