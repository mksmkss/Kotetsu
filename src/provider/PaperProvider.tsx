import * as React from 'react';

import { Provider } from 'react-native-paper';

import { Theme } from 'src/interface';

interface PaperProviderProps {
  children: React.ReactNode;
  theme: Theme;
}

const PaperProvider = (props: PaperProviderProps) => {
  const { children, theme } = props;
  return (
    <Provider theme={theme}>
      {children}
    </Provider>
  );
};

export default PaperProvider;
