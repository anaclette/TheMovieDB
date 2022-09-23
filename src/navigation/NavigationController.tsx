import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Movies from '../screens/MoviesCarousel';
import colors from '../themes/colors';

const Stack = createStackNavigator();

const NavigationController = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.palePink,
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Movies" component={Movies} />
    </Stack.Navigator>
  );
};

export default NavigationController;
