import React from 'react';

import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Login from '../../screens/auth/Login';
import Main from '../../screens/main/Main';
import {store} from '../../redux/Store';

const Authentication = () => {
  const [route, setRoute] = React.useState(
    store.getState().jwt ? 'Main' : 'Login',
  );

  const Navigator = createAppContainer(
    createSwitchNavigator(
      {
        Login: {
          screen: Login,
        },
        Main: {
          screen: Main,
        },
      },
      {
        initialRouteName: route,
      },
    ),
  );
  React.useEffect(() => {
    store.subscribe(() => {
      setRoute(store.getState().jwt ? 'Main' : 'Login');
    });
  }, []);

  return <Navigator />;
};

export default Authentication;
