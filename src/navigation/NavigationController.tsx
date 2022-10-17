import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import colors from '../themes/colors';
import {Movie} from '../types/moviesInterface';
import Tabs from './Tabs';
import {FullCategoryContent} from '../screens/FullCategoryContent/FullCategoryContent';
import {TvDetails as TvDetailsType} from '../types/tvInterface';
import MovieDetails from '../screens/MovieDetails';
import TvDetails from '../screens/TvDetails';

export type RootStackParamList = {
  Home: undefined;
  MovieDetails: Movie;
  TvDetails: TvDetailsType;
  Tabs: () => JSX.Element;
  FullCategoryContent: {
    categoryTitle: string;
  };
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
      <Stack.Screen name="TvDetails" component={TvDetails} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
      <Stack.Screen
        name="FullCategoryContent"
        component={FullCategoryContent}
      />
    </Stack.Navigator>
  );
};

export default NavigationController;
