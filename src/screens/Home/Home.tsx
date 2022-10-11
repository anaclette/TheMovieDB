import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {TouchableOpacity, SafeAreaView, Text, View} from 'react-native';
import {styles} from './home.style';
import copies from '../../utils/copies';
import Icon from 'react-native-vector-icons/Ionicons';
import metrics from '../../themes/metrics';
import colors from '../../themes/colors';

export const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      {/* <Text style={styles.title}>Home</Text> */}

      <TouchableOpacity
        style={styles.navigateButton}
        onPress={() => navigation.navigate('Movies')}>
        <View style={styles.buttonContentWrapper}>
          <Icon
            name="videocam-outline"
            size={metrics.scale(30)}
            color={colors.brown}
          />
          <Text style={styles.buttonText}>
            {copies.es.movies.navTitle.movies}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navigateButton}
        onPress={() => navigation.navigate('Tv')}>
        <View style={styles.buttonContentWrapper}>
          <Icon
            name="tv-outline"
            size={metrics.scale(30)}
            color={colors.brown}
          />
          <Text style={styles.buttonText}>
            {copies.es.movies.navTitle.series}
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
