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

interface PageProps {

}

const Page = (props: PageProps) => {
  const { } = props;
  return (
    <View style={styles.container}>
      <Text>Page</Text>
    </View>
  );
};

export default Page;
