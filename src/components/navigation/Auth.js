import React from 'react';

import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Login from '../../screens/auth/Login';
import Main from '../../screens/main/Main';
import {store} from '../../redux/Store';

const Authentication = () => {
  const [route, setRoute] = React.useState(
    store.getState().jwt ? 'Main' : 'Main',
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
      setRoute(store.getState().jwt ? 'Main' : 'Main');
    });
  }, []);

  return <Navigator />;
};

export default Authentication;
