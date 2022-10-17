import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Cast from '../../components/Cast';
import Icon from 'react-native-vector-icons/Ionicons';
import copies from '../../utils/copies';
import {styles} from './tvDetails.style';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/NavigationController';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';
import {useNavigation} from '@react-navigation/native';
import {imageURL} from '../../common/constants';
import {useTvDetails} from '../../hooks/useTvDetails';
import Loader from '../../components/Loader';

type Props = NativeStackScreenProps<RootStackParamList, 'TvDetails'>;

export const TvDetails = ({route}: Props) => {
  const navigation = useNavigation();
  const details = route.params;

  const {loading, tvCast, fullTv} = useTvDetails(details.id);

  return (
    <ScrollView style={(styles.container, {marginTop: 0})}>
      <>
        <View>
          <View style={styles.imgContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}>
              <Icon
                name="chevron-back-circle-outline"
                color={colors.wine}
                size={metrics.scale(25)}
              />
            </TouchableOpacity>
            <Image
              style={styles.posterImage}
              source={{uri: `${imageURL}${fullTv.poster_path}`}}
            />
          </View>
        </View>
        {!loading ? (
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{fullTv.name}</Text>
            <Text style={styles.overview}>
              {fullTv.overview === ''
                ? copies.es.tv.details.noOverview
                : fullTv.overview}
            </Text>
            <Cast cast={tvCast} />
          </View>
        ) : (
          <Loader />
        )}
      </>
    </ScrollView>
  );
};
