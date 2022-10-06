import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {imageURL} from '../../common/constants';
import {TvDetails} from '../../types/tvInterface';
import {styles} from './tvCard.style';
import {useNavigation} from '@react-navigation/core';

interface Props {
  item: TvDetails;
}

export const TvCard = ({item}: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', item)}
      style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.imageWrapper}>
        <Image
          source={{uri: `${imageURL}${item.poster_path}`}}
          style={styles.image}
        />
      </View>
      <Text style={styles.overview} numberOfLines={6}>
        {item.overview ? item.overview : 'No se encontró descripción 😞'}
      </Text>
    </TouchableOpacity>
  );
};
