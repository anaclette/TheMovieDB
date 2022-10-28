import React from 'react';
import {Text, View, Image} from 'react-native';
import {imageURL} from '../../common/constants';
import {TvDetails} from '../../types/tvInterface';
import {styles} from './tvCard.style';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/NavigationController';
import Button from '../Button';
interface Props {
  item: TvDetails;
}

type NavProps = NavigationProp<RootStackParamList, 'TvDetails'>;

export const TvCard = ({item}: Props) => {
  const navigation = useNavigation<NavProps>();
  return (
    <>
      <Button
        onPress={() => navigation.navigate('TvDetails', item)}
        wrapperStyle={styles.container}
        children={
          <>
            <Text style={styles.name}>{item.name}</Text>

            <View style={styles.innerContainer}>
              <View style={styles.imageWrapper}>
                <Image
                  source={{uri: `${imageURL}${item.poster_path}`}}
                  style={styles.image}
                />
              </View>
              <Text style={styles.overview} numberOfLines={15}>
                {item.overview
                  ? item.overview
                  : 'No se encontró descripción 😞'}
              </Text>
            </View>
          </>
        }
      />
    </>
  );
};
