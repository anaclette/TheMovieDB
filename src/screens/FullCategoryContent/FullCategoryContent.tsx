import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/NavigationController';

interface Props
  extends StackScreenProps<RootStackParamList, 'FullCategoryContent'> {}

export const FullCategoryContent = ({route}: Props) => {
  const params = route.params;

  return (
    <SafeAreaView>
      <Text>{JSON.stringify(params)}</Text>
    </SafeAreaView>
  );
};
