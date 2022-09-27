import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {TouchableOpacity, SafeAreaView, Text} from 'react-native';
import {styles} from './home.style';
import copies from '../../utils/copies';

export const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      {/* <Text style={styles.title}>Home</Text> */}

      <TouchableOpacity
        style={styles.navigateButton}
        onPress={() => navigation.navigate('Movies')}>
        <Text style={styles.buttonText}>{copies.es.detailTitle.movies}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
