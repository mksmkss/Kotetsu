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

interface HelpProps {}

const Help = (props: HelpProps) => {
  const { } = props;
  return (
    <View style={styles.container}>
      <Text>Help</Text>
    </View>
  );
};

export default Help;
