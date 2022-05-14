import * as React from 'react';
import { TextProps as TextPropsOriginal } from 'react-native';
import { Text as TextOriginal } from 'react-native-paper';

import { Theme } from 'src/interface';

interface TextProps extends TextPropsOriginal {
  theme?: Theme
}

const Text = (props: TextProps) => (
  <TextOriginal onPressIn={() => {}} onPressOut={() => {}} {...props} />
);

export default Text;
