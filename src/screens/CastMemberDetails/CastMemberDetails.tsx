import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, ScrollView, Text, View, SafeAreaView} from 'react-native';
import {imageURL} from '../../common/constants';
import Button from '../../components/Button';
import CombinedCreditsCard from '../../components/CombinedCreditsCard';
import Loader from '../../components/Loader';
import {TranslationKeys} from '../../locale/translations/keys';
import {RootStackParamList} from '../../navigation/NavigationController';
import {
  useGetCombinedCreditsQuery,
  useGetMemberDetailsQuery,
} from '../../state/themoviedb';
import {useAppSelector} from '../../state/hooks';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';
import {styles} from './castMemberDetails.style';

type Props = NativeStackScreenProps<RootStackParamList, 'CastMemberDetails'>;

export const CastMemberDetails = ({route, navigation}: Props) => {
  const {t} = useTranslation();
  const params = route.params;
  const chosenLanguage = useAppSelector(state => state.i18nSlice.lang);
  const {data: castMemberData, isLoading: loadingMemberData} =
    useGetMemberDetailsQuery({
      id: params.id,
      currentLanguage: chosenLanguage,
    });
  const {data: castMemberCombinedCredits, isLoading: loadingCombinedCredits} =
    useGetCombinedCreditsQuery({
      id: params.id,
      currentLanguage: chosenLanguage,
    });

  return loadingMemberData || loadingCombinedCredits ? (
    <Loader />
  ) : (
    <SafeAreaView style={styles.safeAreaView}>
      <Button
        size={metrics.scale(20)}
        wrapperStyle={styles.backButton}
        icon="chevron-back-circle-outline"
        onPress={() => navigation.goBack()}
        color={colors.palePink}
      />
      <ScrollView>
        <View style={styles.personalInfoWrapper}>
          <View style={styles.personalInfoDetails}>
            <Text style={styles.name}>{castMemberData?.name}</Text>
            {castMemberData?.birthday && (
              <Text style={styles.secondaryDetailsText}>
                {castMemberData?.birthday}
              </Text>
            )}
            {castMemberData?.place_of_birth && (
              <Text style={styles.secondaryDetailsText}>
                {castMemberData?.place_of_birth}
              </Text>
            )}
          </View>

          <View style={styles.profileImageWrapper}>
            <Image
              source={{uri: `${imageURL}${castMemberData?.profile_path}`}}
              style={[styles.image, styles.profileImage]}
            />
          </View>
        </View>

        <View style={styles.biographyWrapper}>
          {castMemberData?.biography ? (
            <Text style={styles.biography}>{castMemberData?.biography}</Text>
          ) : (
            <Text style={styles.biography}>
              {t(TranslationKeys.NO_FURTHER_INFO)}
            </Text>
          )}
          <Text style={styles.otherCreditsTitle}>
            {t(TranslationKeys.ALSO_IN)}
          </Text>
        </View>

        <View style={styles.combinedCreditsWrapper}>
          {castMemberCombinedCredits?.map((item, index) => {
            const isMovie = item.media_type === 'movie';
            return (
              <Button
                key={index}
                wrapperStyle={styles.cardWrappingButton}
                onPress={() =>
                  navigation.navigate(
                    isMovie ? 'MovieDetails' : 'TvDetails',
                    item,
                  )
                }
                children={<CombinedCreditsCard item={item} index={index} />}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
