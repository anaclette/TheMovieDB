import React, {useMemo, useCallback} from 'react';
import {Text, View, FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Button from '../../components/Button';
import TvCard from '../../components/TvCard';
import {useTv} from '../../hooks/useTv';
import colors from '../../themes/colors';
import {TvDetails} from '../../types/tvInterface';
import copies from '../../utils/copies';
import {styles} from './tv.style';

export const Tv = () => {
  const {airingToday, onTheAir, popular, topRated} = useTv();
  const {top} = useSafeAreaInsets();

  type TvTypes = 'onTheAir' | 'airingToday' | 'popular' | 'topRated';

  type TvData = {
    type: TvTypes;
    data: TvDetails[];
  };

  const tvData = useMemo<TvData[]>(
    () => [
      {
        data: onTheAir,
        type: 'onTheAir',
      },
      {
        data: airingToday,
        type: 'airingToday',
      },
      {
        data: popular,
        type: 'popular',
      },
      {
        data: topRated,
        type: 'topRated',
      },
    ],
    [airingToday, onTheAir, popular, topRated],
  );

  const getItem = useCallback((item: TvData, title: string) => {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title} </Text>
        <Button icon="arrow-forward" />
        {item.data.slice(0, 6).map(dataItem => {
          return <TvCard item={dataItem} />;
        })}
      </View>
    );
  }, []);

  const renderItem = useCallback(
    ({item}: {item: TvData}) => {
      if (item.type === 'airingToday') {
        return getItem(item, `${copies.es.tv.categoryTitles.airingToday}`);
      }
      if (item.type === 'popular') {
        return getItem(item, `${copies.es.tv.categoryTitles.popular}`);
      }
      if (item.type === 'topRated') {
        return getItem(item, `${copies.es.tv.categoryTitles.topRated}`);
      }
      if (item.type === 'onTheAir') {
        return getItem(item, `${copies.es.tv.categoryTitles.onTheAir}`);
      }
      return null;
    },
    [getItem],
  );

  // const retrieveKey = (results: TvData, index: number) => {
  //   return results.data.map(item => `item_${item.id}_${index}`);
  // };

  return (
    <View style={{backgroundColor: colors.darkPink, paddingTop: top}}>
      <FlatList
        data={tvData}
        contentContainerStyle={styles.contentContainer}
        renderItem={renderItem}
        numColumns={2}
        // keyExtractor={retrieveKey}
      />
    </View>
  );
};
