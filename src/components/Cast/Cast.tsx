import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {CastResp} from '../../types/creditsInterface';
import copies from '../../utils/copies';
import {styles} from './cast.style';

interface Props {
  cast: CastResp[];
}

export const Cast = ({cast}: Props) => {
  return (
    <>
      <Text style={styles.castTitle}>{copies.es.detailTitle.cast} </Text>
      <View style={styles.castWrapper}>
        {cast.map((member, index) => {
          return (
            <TouchableOpacity key={index}>
              <Text style={styles.castMember}>{member.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};
