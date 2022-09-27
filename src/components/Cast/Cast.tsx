import React from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import {imageURL, noImageURL} from '../../common/constants';
import {CastResp} from '../../types/creditsInterface';
import copies from '../../utils/copies';
import {styles} from './cast.style';

interface Props {
  cast: CastResp[];
}

export const Cast = ({cast}: Props) => {
  const renderItem = ({item}: {item: CastResp}) => {
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
  return (
    <View style={styles.container}>
      <Text style={styles.castTitle}>{copies.es.navTitle.cast} </Text>
      <View style={styles.castWrapper}>
        <Text style={styles.castMember}>
          <FlatList
            horizontal
            data={cast}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
          />
        </Text>
      </View>
    </View>
  );
};
