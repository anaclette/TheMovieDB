import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {imageURL} from '../../common/constants';
import Button from '../../components/Button';
import {RootStackParamList} from '../../navigation/NavigationController';
import {
  useGetCombinedCreditsQuery,
  useGetMemberDetailsQuery,
} from '../../state/cast';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';
import {CombinedCreditsCast} from '../../types/castMemberInterface';
import {styles} from './castMemberDetails.style';

type Props = NativeStackScreenProps<RootStackParamList, 'CastMemberDetails'>;

export const CastMemberDetails = ({route, navigation}: Props) => {
  const params = route.params;
  const {data: castMemberData} = useGetMemberDetailsQuery(params.id);
  const {data: castMemberCombinedCredits} = useGetCombinedCreditsQuery(
    params.id,
  );

  const renderItem = ({item}: {item: CombinedCreditsCast}) => {
    const isMovie = item.media_type === 'movie';

    return (
      <Button
        onPress={() =>
          navigation.navigate(isMovie ? 'MovieDetails' : 'TvDetails', item)
        }
        children={
          <View
            style={{
              borderWidth: 2,
              marginVertical: 20,
              borderColor: 'black',
              width: 200,
            }}>
            <Image
              source={
                item.poster_path
                  ? {uri: `${imageURL}${item.poster_path}`}
                  : require('../../assets/images/No-img-available.png')
              }
              style={{width: '100%', height: 300}}
            />
            <Icon
              name={isMovie ? 'movie' : 'tv'}
              size={metrics.scale(20)}
              color={colors.petroleum}
            />
            {item.name && <Text>Nombre: {item.name}</Text>}
            {item.overview && (
              <Text numberOfLines={3}>Sinopsis: {item.overview}</Text>
            )}
            {item.release_date && (
              <Text>Fecha de lanzamiento: {item.release_date}</Text>
            )}
            {item.title && <Text>Título: {item.title}</Text>}
          </View>
        }
      />
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.nameAndImageWrapper}>
          <Text>{castMemberData?.name}</Text>
          <View style={styles.imageWrapper}>
            <Image
              source={{uri: `${imageURL}${castMemberData?.profile_path}`}}
              style={styles.image}
            />
          </View>
        </View>

        {castMemberData?.birthday && <Text>{castMemberData?.birthday}</Text>}
        {castMemberData?.place_of_birth && (
          <Text>{castMemberData?.place_of_birth}</Text>
        )}

        {castMemberData?.biography ? (
          <Text>{castMemberData?.biography}</Text>
        ) : (
          <Text>No hay mayor información.</Text>
        )}
      </ScrollView>

      <Text>También actuó en: </Text>
      <FlatList
        numColumns={2}
        data={castMemberCombinedCredits}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};
