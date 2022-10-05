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

const Tab = createMaterialTopTabNavigator();

export const Tabs = () => {
  const platformIsIos = Platform.OS === 'ios';
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarLabelStyle: {
          fontSize: 10,
          color: colors.blackChocolate,
        },
        tabBarIcon: ({focused}) => {
          return (
            <TouchableHighlight>
              <TabIcon route={route} focused={focused} />
            </TouchableHighlight>
          );
        },
        tabBarItemStyle: {width: 100},
        tabBarStyle: !platformIsIos
          ? {
              height: insets.top + 90,
              backgroundColor: colors.blackChocolate,
              elevation: 0,
            }
          : {
              height: insets.top + 50,
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
      <Tab.Screen name="Movies" component={MoviesCarousel} />
      <Tab.Screen name="Tv" component={Tv} />
      <Tab.Screen name="Search" component={SearchBar} />
    </Tab.Navigator>
  );
};
