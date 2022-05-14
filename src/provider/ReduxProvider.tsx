import * as React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// import { store, persistor } from 'src/redux';

interface ReduxProviderProps {
  children: React.ReactNode;
}

const ReduxProvider = (props: ReduxProviderProps) => {
  const { children } = props;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
