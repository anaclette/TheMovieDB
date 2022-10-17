import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {imageURL} from '../../common/constants';
import {TvDetails} from '../../types/tvInterface';
import {styles} from './tvCard.style';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/NavigationController';
interface Props {
  item: TvDetails;
}

type NavProps = NavigationProp<RootStackParamList, 'TvDetails'>;

export const TvCard = ({item}: Props) => {
  const navigation = useNavigation<NavProps>();
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('TvDetails', item)}
        style={styles.container}>
        <Text style={styles.name}>{item.name}</Text>

        <View style={styles.innerContainer}>
          <View style={styles.imageWrapper}>
            <Image
              source={{uri: `${imageURL}${item.poster_path}`}}
              style={styles.image}
            />
          </View>
          <Text style={styles.overview} numberOfLines={15}>
            {item.overview ? item.overview : 'No se encontró descripción 😞'}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
