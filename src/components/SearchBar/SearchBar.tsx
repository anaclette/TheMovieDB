import React from 'react';
import {View, SafeAreaView, TouchableHighlight, Image} from 'react-native';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';
import Button from '../Button';
import {styles} from './searchBar.style';
import {RootStackParamList} from '../../navigation/NavigationController';
import {useNavigation, NavigationProp} from '@react-navigation/native';

type NavProp = NavigationProp<RootStackParamList, 'SearchResults'>;

export const SearchBar = ({showSearchBar}: {showSearchBar: boolean}) => {
  const navigation = useNavigation<NavProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonsWrapper}>
        <View style={styles.languageButtonsWrapper}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor={colors.lightBlue}
            onPress={() => undefined}
            style={styles.languageFlagButton}>
            <Image
              source={require('../../assets/images/Argentina_flag.webp')}
              style={styles.flagAsset}
            />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor={colors.lightBlue}
            onPress={() => undefined}
            style={styles.languageFlagButton}>
            <Image
              source={require('../../assets/images/USA_flag.png')}
              style={[styles.flagAsset, styles.biggerAsset]}
            />
          </TouchableHighlight>
        </View>
        {showSearchBar && (
          <View style={styles.searchButtonWrapper}>
            <Button
              icon="search-outline"
              color={colors.palePink}
              size={metrics.scale(27)}
              onPress={() => {
                navigation.navigate('SearchResults');
              }}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
export default SearchBar;
