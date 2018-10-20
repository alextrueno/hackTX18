import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  },
  { headerMode: 'none' }
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
  tabBarOptions: {
    style: {
      backgroundColor: '#f4791f'
    }
  },
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
  },
  { headerMode: 'none'}
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
  tabBarOptions: {
    style: {
      backgroundColor: '#f4791f'
    }
  },
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  },
  { headerMode: 'none'}
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
  tabBarOptions: {
    style: {
      backgroundColor: '#f4791f'
    }
  },
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
