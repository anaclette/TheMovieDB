import React from 'react';
import {Text, View} from 'react-native';
import {CastResp} from '../../types/creditsInterface';
import copies from '../../utils/copies';
import {styles} from './cast.style';

interface Props {
  cast: CastResp[];
}

export const Cast = ({cast}: Props) => {
  return (
    <>
      <Text style={styles.castTitle}>{copies.es.navTitle.cast} </Text>
      <View style={styles.castWrapper}>
        <Text style={styles.castMember}>
          {cast.map(member => member.name).join(', ')}
        </Text>
      </View>
    </>
  );
};
