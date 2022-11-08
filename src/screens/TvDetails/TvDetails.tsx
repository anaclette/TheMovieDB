import React, {useState} from 'react';
import {Image, ScrollView, Text, View, Modal} from 'react-native';
import Cast from '../../components/Cast';
import {styles} from './tvDetails.style';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/NavigationController';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';
import {useNavigation} from '@react-navigation/native';
import {imageURL} from '../../common/constants';
import Loader from '../../components/Loader';
import Rating from '../../components/Rating';
import {SafeAreaView} from 'react-native';
import Button from '../../components/Button';
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '../../locale/translations/keys';
import {useGetTvShowCastQuery, useGetTvShowQuery} from '../../state/tvshows';

type Props = NativeStackScreenProps<RootStackParamList, 'TvDetails'>;

export const TvDetails = ({route}: Props) => {
  const navigation = useNavigation();
  const details = route.params;
  const [isVisible, setIsVisible] = useState(false);
  const {data: tvCast} = useGetTvShowCastQuery(details.id);
  const {data: fullTv, isLoading, isSuccess} = useGetTvShowQuery(details.id);
  const {t} = useTranslation();
  return (
    <>
      {!isLoading && isSuccess ? (
        <>
          <View style={styles.imgContainer}>
            <Button
              size={metrics.scale(20)}
              wrapperStyle={styles.backButton}
              icon="chevron-back-circle-outline"
              onPress={() => navigation.goBack()}
              color={colors.brown}
            />
            <Image
              style={styles.posterImage}
              source={{uri: `${imageURL}${fullTv.poster_path}`}}
            />
          </View>

          <View style={styles.previewContainer}>
            {fullTv.genres.length !== 0 && (
              <>
                <View style={styles.genreWrapper}>
                  {fullTv.genres.map((genre, index) => {
                    return (
                      <Text key={index.toString()} style={styles.genreItem}>
                        {(index ? ' ● ' : '') + genre.name}
                      </Text>
                    );
                  })}
                </View>
              </>
            )}

            {!!fullTv.number_of_episodes && (
              <Text
                style={
                  styles.overview
                }>{`${fullTv.number_of_episodes} episodios`}</Text>
            )}
            <Button
              moreButton
              onPress={() => {
                setIsVisible(true);
              }}
            />
          </View>
        </>
      ) : (
        <Loader />
      )}

      <View>
        <Modal
          animationType="slide"
          visible={isVisible}
          transparent={true}
          onRequestClose={() => setIsVisible(!isVisible)}
          onDismiss={() => {
            // efecto imagen
          }}
          onOrientationChange={() => {
            // efecto si gira la pantalla cuando está abierto
          }}
          // Android prop to show under the system statusbar
          statusBarTranslucent={true}>
          {!isLoading ? (
            <SafeAreaView style={styles.modalInnerWrapper}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.detailsContainer}>
                  <Text style={styles.title}>{fullTv?.name}</Text>
                  <Rating
                    rating={fullTv?.vote_average!}
                    color={colors.lightBlue}
                  />
                  <Text style={styles.overview}>
                    {fullTv?.overview === ''
                      ? t(TranslationKeys.NO_OVERVIEW_TV_SHOW)
                      : fullTv?.overview}
                  </Text>
                </View>
                {tvCast && tvCast?.length !== 0 && (
                  <Cast isTv setIsVisible={setIsVisible} cast={tvCast} />
                )}
                <Button
                  icon="chevron-down-outline"
                  size={metrics.scale(25)}
                  color={colors.lightBlue}
                  onPress={() => setIsVisible(false)}
                  wrapperStyle={styles.closeModalButton}
                />
              </ScrollView>
            </SafeAreaView>
          ) : (
            <Loader />
          )}
        </Modal>
      </View>
    </>
  );
};
