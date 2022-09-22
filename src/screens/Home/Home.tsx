import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {Button, SafeAreaView, Text} from 'react-native';
import {styles} from './home.style';

export const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text style={styles.title}>Home</Text>

      <Button
        title="Check out movies"
        onPress={() => navigation.navigate('Movies')}
      />
    </SafeAreaView>
  );
};
