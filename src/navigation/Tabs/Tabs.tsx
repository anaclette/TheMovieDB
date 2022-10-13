/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MoviesCarousel from '../../screens/MoviesCarousel';
import Home from '../../screens/Home';
import {Platform, TouchableHighlight} from 'react-native';
import colors from '../../themes/colors';
import TabIcon from '../../components/TabIcon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Tv from '../../screens/Tv';
import SearchBar from '../../components/SearchBar';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

const Tab = createMaterialTopTabNavigator();

export const Tabs = () => {
  const platformIsIos = Platform.OS === 'ios';
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarLabelStyle: {
          ...fonts.HindSiliguri,
          color: colors.blackChocolate,
        },
        tabBarIcon: ({focused}) => {
          return (
            <TouchableHighlight style={{alignSelf: 'center'}}>
              <TabIcon route={route} focused={focused} />
            </TouchableHighlight>
          );
        },
        tabBarStyle: !platformIsIos
          ? {
              height: insets.top + metrics.scale(75),
              backgroundColor: colors.lightBlue,
              justifyContent: 'center',
              elevation: 0,
            }
          : {
              height: insets.top + metrics.scale(40),
              backgroundColor: colors.palePink,
            },

        tabBarPressColor: colors.palePink,
        tabBarIndicatorStyle: {
          backgroundColor: !platformIsIos ? colors.palePink : colors.wine,
        },
        tabBarActiveTintColor: platformIsIos ? colors.palePink : colors.wine,
        tabBarInactiveTintColor: colors.palePink,
      })}
      tabBarPosition={platformIsIos ? 'bottom' : 'top'}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        options={{title: 'Pelis'}}
        name="Movies"
        component={MoviesCarousel}
      />
      <Tab.Screen options={{title: 'Series'}} name="Tv" component={Tv} />
      <Tab.Screen
        options={{title: 'Buscar'}}
        name="Search"
        component={SearchBar}
      />
    </Tab.Navigator>
  );
};
