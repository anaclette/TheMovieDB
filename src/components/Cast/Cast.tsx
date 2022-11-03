import React from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import {imageURL, noImageURL} from '../../common/constants';
import {CastResp} from '../../types/creditsInterface';
import {styles} from './cast.style';
import {Cast as TvCast} from '../../types/tvCreditsInterface';
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '../../locale/translations/keys';

interface Props {
  cast: CastResp[] | TvCast[];
}

const renderItem = ({item}: {item: CastResp | TvCast}) => {
  const source = `${imageURL}${item.profile_path}`;
  // const noImage = require('../../assets/images/No-img-available.svg.png');
  return (
    <View style={styles.memberDetailsWrapper}>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.imageWrapper}>
        {item.profile_path ? (
          <Image source={{uri: source}} style={styles.image} />
        ) : (
          <Image
            source={{
              uri: noImageURL,
            }}
            style={styles.image}
          />
        )}
      </View>
    </View>
  );
};

export const Cast = ({cast}: Props) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.castTitle}>{t(TranslationKeys.CAST_TITLE)} </Text>
      <FlatList
        horizontal
        data={cast as TvCast[]}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
};
