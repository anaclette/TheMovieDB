import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, ScrollView, Text, View, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {imageURL} from '../../common/constants';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import {TranslationKeys} from '../../locale/translations/keys';
import {RootStackParamList} from '../../navigation/NavigationController';
import {
  useGetCombinedCreditsQuery,
  useGetMemberDetailsQuery,
} from '../../state/cast';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';
import {getYear} from '../../utils/helpers';
import {styles} from './castMemberDetails.style';

type Props = NativeStackScreenProps<RootStackParamList, 'CastMemberDetails'>;

export const CastMemberDetails = ({route, navigation}: Props) => {
  const {t} = useTranslation();
  const params = route.params;
  const {data: castMemberData} = useGetMemberDetailsQuery(params.id);
  const {data: castMemberCombinedCredits, isLoading} =
    useGetCombinedCreditsQuery(params.id);

  return (
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

        {isLoading ? (
          <Loader />
        ) : (
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
                  children={
                    <View>
                      <View style={styles.combinedCreditsImageWrapper}>
                        <Image
                          source={
                            item.poster_path
                              ? {uri: `${imageURL}${item.poster_path}`}
                              : require('../../assets/images/No-img-available.png')
                          }
                          style={[styles.image, styles.combinedCreditsImage]}
                        />
                      </View>

                      <View style={styles.creditDetailsWrapper}>
                        <View style={styles.creditDetailsContainer}>
                          {item.title && (
                            <Text style={[styles.detail, styles.creditTitle]}>
                              {item.title}
                            </Text>
                          )}
                          {item.name && (
                            <Text style={[styles.detail, styles.creditTitle]}>
                              {item.name}
                            </Text>
                          )}
                          {item.release_date && (
                            <Text style={styles.detail}>
                              ({getYear(item.release_date)})
                            </Text>
                          )}
                        </View>

                        <Icon
                          name={isMovie ? 'movie' : 'tv'}
                          size={metrics.scale(20)}
                          color={colors.lightBlue}
                        />
                      </View>
                    </View>
                  }
                />
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
