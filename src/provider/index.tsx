import * as React from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import { Theme } from 'src/config';

// import ReduxProvider from './ReduxProvider';
import PaperProvider from './PaperProvider';
import NavigationProvider from './NavigationProvider';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = (props: ProvidersProps) => {
  const colorScheme = useColorScheme();
  const { children } = props;
  const isDark = colorScheme === 'dark';
  return (
  // <ReduxProvider>
    <PaperProvider theme={isDark ? Theme.dark : Theme.light}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      <NavigationProvider theme={isDark ? Theme.dark : Theme.light}>
        {children}
      </NavigationProvider>
    </PaperProvider>
  // </ReduxProvider>
  );
};

export default Providers;
