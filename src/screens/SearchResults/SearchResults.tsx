import {StackScreenProps} from '@react-navigation/stack';
import React, {useCallback, useRef, useState} from 'react';
import debounce from 'lodash.debounce';
import {
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import {RootStackParamList} from '../../navigation/NavigationController';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';
import {styles} from './searchResults.style';

import Button from '../../components/Button';
import {useGetSearchResultQuery} from '../../state/themoviedb';
import {SearchResult} from '../../types/multiSearch';
import {imageURL} from '../../common/constants';
import CombinedCreditsCard from '../../components/CombinedCreditsCard';
import {useAppSelector} from '../../state/hooks';
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '../../locale/translations/keys';
import {CastMember} from '../../types/castMemberInterface';
import {TvDetails} from '../../types/tvInterface';
import {Movie} from '../../types/moviesInterface';

type NavProp = StackScreenProps<RootStackParamList, 'SearchResults'>;

export const SearchResults = ({navigation}: NavProp) => {
  const [userInput, setUserInput] = useState('');
  const {t} = useTranslation();
  const chosenLanguage = useAppSelector(state => state.i18nSlice.lang);
  const {data: searchResults} = useGetSearchResultQuery({
    keyword: userInput,
    page: 1,
    currentLanguage: chosenLanguage,
  });

  const debouncedSave = useRef(
    debounce(input => {
      setUserInput(input);
    }, 1000),
  ).current;

  const renderItem = useCallback(
    ({item, index}: {item: SearchResult; index: number}) => {
      const isPerson = item.media_type === 'person';
      const isTv = item.media_type === 'tv';

      return !isPerson ? (
        <Button
          onPress={() => {
            isTv
              ? navigation.navigate('TvDetails', item as TvDetails)
              : navigation.navigate('MovieDetails', item as Movie);
          }}
          children={
            <View key={index} style={styles.cardWrapper}>
              <CombinedCreditsCard item={item} index={index} />
            </View>
          }
        />
      ) : (
        <Button
          onPress={() =>
            navigation.navigate(
              'CastMemberDetails',
              item as unknown as CastMember,
            )
          }
          children={
            <View key={index} style={styles.cardWrapper}>
              <View style={styles.imageWrapper}>
                <Image
                  style={!item.poster_path && styles.noImage}
                  source={
                    item.poster_path
                      ? {
                          uri: `${imageURL}${item.poster_path}`,
                        }
                      : require('../../assets/images/No-img-available.png')
                  }
                />
              </View>
              <Text style={styles.title}>{item.name}</Text>
            </View>
          }
        />
      );
    },
    [navigation],
  );

  return (
    <View>
      <KeyboardAvoidingView
        style={styles.keyBoardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
          <Button
            size={metrics.scale(20)}
            wrapperStyle={styles.backButton}
            icon="chevron-back-circle-outline"
            onPress={() => {
              navigation.goBack();
            }}
            color={colors.palePink}
          />
          <View style={styles.inputWrapper}>
            <TextInput
              style={[
                styles.input,
                {
                  height:
                    Platform.OS === 'ios'
                      ? metrics.scale(30)
                      : metrics.scale(40),
                },
              ]}
              placeholder={t(TranslationKeys.FIND)}
              placeholderTextColor={colors.petroleum}
              onChangeText={debouncedSave}
              onSubmitEditing={input => setUserInput(input.nativeEvent.text)}
              autoFocus={true}
              autoCorrect={false}
              underlineColorAndroid={colors.transparent}
            />
            <Button
              icon="search-outline"
              color={colors.petroleum}
              size={metrics.scale(15)}
              onPress={() => {
                Keyboard.dismiss();
              }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
      {!!userInput && (
        <FlatList
          contentContainerStyle={styles.resultsContainer}
          initialNumToRender={5}
          removeClippedSubviews
          numColumns={2}
          data={searchResults}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      )}
    </View>
  );
};
