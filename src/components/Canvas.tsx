import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface CanvasProps {}

const Canvas = (props: CanvasProps) => {
  const { } = props;
  return (
    <View>
      <Text>Canvas</Text>
    </View>
  );
};

export default Canvas;
