import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MoviesCarousel from '../../screens/MoviesCarousel';
import Home from '../../screens/Home';
import colors from '../../themes/colors';
import TabIcon from '../../components/TabIcon';
import Tv from '../../screens/Tv';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

const Tab = createMaterialTopTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarLabelStyle: {
          ...fonts.HindSiliguri,
          fontSize: metrics.scaledFontSize(10),
        },
        tabBarIcon: ({focused}) => {
          return <TabIcon route={route} focused={focused} />;
        },
        tabBarStyle: {
          backgroundColor: colors.petroleum,
          height: metrics.scaleVertical(75),
          justifyContent: 'center',
          shadowOffset: {
            height: metrics.scale(2),
            width: metrics.scale(1), // unnecessary but specified to appease TS
          },
          shadowOpacity: 0.9,
          shadowRadius: metrics.scale(11),
          shadowColor: colors.palePink,
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.lightBlue,
          bottom: metrics.screenHeight / 5 - metrics.scale(135),
          height: 1,
          alignSelf: 'center',
          width: '15%',
          marginHorizontal: metrics.scale(33),
        },
        tabBarActiveTintColor: colors.lightBlue,
        tabBarInactiveTintColor: colors.gray,
      })}
      tabBarPosition={'bottom'}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        options={{title: 'Pelis'}}
        name="Movies"
        component={MoviesCarousel}
      />
      <Tab.Screen options={{title: 'Series'}} name="Tv" component={Tv} />
    </Tab.Navigator>
  );
};
