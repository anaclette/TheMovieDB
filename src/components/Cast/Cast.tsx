import React from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import {imageURL} from '../../common/constants';
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

  return (
    <View style={styles.memberDetailsWrapper}>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.imageWrapper}>
        {item.profile_path ? (
          <Image source={{uri: source}} style={styles.image} />
        ) : (
          <Image
            source={require('../../assets/images/No-img-available.png')}
            style={[styles.image, styles.noImageAsset]}
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
