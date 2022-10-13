import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TaskTable from '../main/TaskTable';
import Services from '../main/Services';
import Profile from '../main/Profile';
import News from '../main/News';

const Tab = createBottomTabNavigator();

const Login = props => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="TaskTable" component={TaskTable} />
      <Tab.Screen name="Services" component={Services} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Login;
