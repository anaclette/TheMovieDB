import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {CastResp} from '../../types/creditsInterface';
import {styles} from './cast.style';

interface Props {
  cast: CastResp[];
}

export const Cast = ({cast}: Props) => {
  return (
    <>
      <Text style={styles.castTitle}>Cast </Text>
      <View style={styles.castWrapper}>
        {cast.map(member => {
          return (
            <TouchableOpacity>
              <Text style={styles.castMember}>{member.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};
