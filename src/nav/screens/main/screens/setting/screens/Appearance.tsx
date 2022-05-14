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

interface AppearanceProps {}

const Appearance = (props: AppearanceProps) => {
  const { } = props;
  return (
    <View style={styles.container}>
      <Text>Appearance</Text>
    </View>
  );
};

export default Appearance;
