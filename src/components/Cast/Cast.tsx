import React, {useCallback} from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import {imageURL} from '../../common/constants';
import {CastResp} from '../../types/creditsInterface';
import {styles} from './cast.style';
import {Cast as TvCast} from '../../types/tvCreditsInterface';
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '../../locale/translations/keys';
import Button from '../Button';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/NavigationController';
import {CastMember} from '../../types/castMemberInterface';

interface Props {
  cast: CastResp[] | TvCast[];
  isTv?: boolean;
  setIsVisible: (value: boolean) => void;
}

type NavProps = NavigationProp<RootStackParamList, 'CastMemberDetails'>;

export const Cast = ({cast, isTv, setIsVisible}: Props) => {
  const {t} = useTranslation();
  const {navigate} = useNavigation<NavProps>();

  const renderItem = useCallback(
    ({item}: {item: CastResp | TvCast | CastMember}) => {
      const source = `${imageURL}${item.profile_path}`;

      return (
        <Button
          onPress={() => {
            isTv && setIsVisible(false);
            navigate('CastMemberDetails', item as CastMember);
          }}
          children={
            <>
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
            </>
          }
        />
      );
    },
    [isTv, navigate, setIsVisible],
  );
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
