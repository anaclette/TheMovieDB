import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import colors from '../themes/colors';
import Details from '../screens/Details';
import {Movie} from '../types/moviesInterface';
import Tabs from './Tabs';
// import {FullCategoryContent} from '../screens/FullCategoryContent/FullCategoryContent';
import {TvDetails} from '../types/tvInterface';

export type RootStackParamList = {
  Home: undefined;
  Details: Movie | TvDetails;
  TvDetails: TvDetails;
  Tabs: () => JSX.Element;
};

const Stack = createStackNavigator<RootStackParamList>();

const NavigationController = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.palePink,
        },
      }}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Details" component={Details} />
      {/* <Stack.Screen
        name="FullCategoryContent"
        component={FullCategoryContent}
      /> */}
    </Stack.Navigator>
  );
};

export default NavigationController;
