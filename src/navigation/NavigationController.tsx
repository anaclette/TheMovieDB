import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Movie} from '../types/moviesInterface';
import Tabs from './Tabs';
import {FullCategoryContent} from '../screens/FullCategoryContent/FullCategoryContent';
import {TvDetails as TvDetailsType} from '../types/tvInterface';
import MovieDetails from '../screens/MovieDetails';
import TvDetails from '../screens/TvDetails';
import SearchBar from '../components/SearchBar';
import {getHeaderTitle} from '@react-navigation/elements';
import CastMemberDetails from '../screens/CastMemberDetails';
import {CastMember} from '../types/castMemberInterface';
import colors from '../themes/colors';

export type RootStackParamList = {
  MovieDetails: Movie;
  TvDetails: TvDetailsType;
  Tabs: () => JSX.Element;
  FullCategoryContent: {
    categoryTitle: string;
  };
  CastMemberDetails: CastMember;
};

const Stack = createStackNavigator<RootStackParamList>();

const NavigationController = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({route, options}) => {
          const title = getHeaderTitle(options, route.name);
          return title === 'MovieDetails' || title === 'TvDetails' ? null : (
            <SearchBar />
          );
        },
        cardStyle: {
          backgroundColor: colors.petroleum,
        },
      }}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="TvDetails" component={TvDetails} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
      <Stack.Screen
        name="FullCategoryContent"
        component={FullCategoryContent}
      />
      <Stack.Screen name="CastMemberDetails" component={CastMemberDetails} />
    </Stack.Navigator>
  );
};

export default NavigationController;
