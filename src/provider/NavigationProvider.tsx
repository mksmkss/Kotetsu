import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Theme } from 'src/interface';
import { navigationRef } from 'src/nav/navigationRef';

interface NavigationProviderProps {
  children: React.ReactNode;
  theme: Theme;
}

const NAVSTATE_KEY = 'NavState_Key';
const NavigationProvider = (props: NavigationProviderProps) => {
  const { children, theme } = props;
  const [isReady, setIsReady] = React.useState(false);
  const [initialNavState, setInitialNavState] = React.useState();

  // 起動時に現在地の取得
  React.useEffect(() => {
    const restoreNavState = async () => {
      try {
        const savedNavStateString = await AsyncStorage.getItem(NAVSTATE_KEY);
        const state = savedNavStateString ? JSON.parse(savedNavStateString) : undefined;
        if (state !== undefined) { setInitialNavState(state); }
      } catch (e) {
        console.error(e);
      } finally {
        setIsReady(true);
      }
    };
    if (!isReady) { restoreNavState(); }
  }, [isReady]);

  const saveNavState = (navState) => {
    AsyncStorage.setItem(NAVSTATE_KEY, JSON.stringify(navState));
  };

  if (!isReady) { return null; }
  return (
    <NavigationContainer
      theme={theme}
      initialState={initialNavState}
      onStateChange={saveNavState}
      ref={navigationRef}
    >
      {children}
    </NavigationContainer>
  );
};

export default NavigationProvider;
