import React from 'react';
import {Text, View, Image} from 'react-native';
import {imageURL} from '../../common/constants';
import {TvDetails} from '../../types/tvInterface';
import {styles} from './tvCard.style';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/NavigationController';
import Button from '../Button';
import {t} from 'i18next';
import {TranslationKeys} from '../../locale/translations/keys';
interface Props {
  item: TvDetails;
  isFullContentPage?: boolean;
}

type NavProps = NavigationProp<RootStackParamList, 'TvDetails'>;

export const TvCard = ({item, isFullContentPage}: Props) => {
  const navigation = useNavigation<NavProps>();
  const noImage = require('../../assets/images/No-img-available.png');
  const source = item.poster_path
    ? {uri: `${imageURL}${item.poster_path}`}
    : noImage;
  return (
    <>
      <Button
        onPress={() => navigation.navigate('TvDetails', item)}
        wrapperStyle={!isFullContentPage ? styles.container : {}}
        children={
          <>
            {!isFullContentPage && <Text style={styles.name}>{item.name}</Text>}

            <View style={styles.innerContainer}>
              <View
                style={
                  !isFullContentPage
                    ? styles.imageWrapper
                    : styles.fullContentPageImageWrapper
                }>
                <Image source={source} style={styles.image} />
              </View>
              {!isFullContentPage && (
                <Text style={styles.overview} numberOfLines={15}>
                  {item.overview
                    ? item.overview
                    : t(TranslationKeys.NO_OVERVIEW_TV_SHOW)}
                </Text>
              )}
            </View>
          </>
        }
      />
    </>
  );
};
