import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/Store';
import Auth from './src/components/navigation/Auth';

const App = () => {
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Auth />
        </PersistGate>
      </Provider>
  );
};

export default App;
