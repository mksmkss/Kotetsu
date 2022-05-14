/* 全くの未定 */
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

interface ProgressProps {}

const Progress = (props: ProgressProps) => {
  const { } = props;
  return (
    <View style={styles.container}>
      <Text>Progress</Text>
    </View>
  );
};

export default Progress;
