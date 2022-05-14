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

interface AccountProps {

}

const Account = (props: AccountProps) => {
  const { } = props;
  return (
    <View style={styles.container}>
      <Text>Account</Text>
    </View>
  );
};

export default Account;
