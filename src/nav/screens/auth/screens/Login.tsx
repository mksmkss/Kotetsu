import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { EPaper } from 'src/components';

const { Text } = EPaper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface LoginProps {}

const Login = (props: LoginProps) => {
  const { } = props;
  return (
    <View style={styles.container}>
      <Text>This is Login screen!</Text>
    </View>
  );
};

export default Login;
