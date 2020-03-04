import * as React from 'react';
import {Button, View} from 'react-native';
import Second from './src/components/second';
import Home from './src/components/home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="home" component={Home} />
        <Drawer.Screen name="Second" component={Second} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
