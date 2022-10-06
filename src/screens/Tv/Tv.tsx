import React, {useMemo, useCallback} from 'react';
import {Text, View, FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Button from '../../components/Button';
import TvCard from '../../components/TvCard';
import {useTv} from '../../hooks/useTv';
import colors from '../../themes/colors';
import {TvDetails} from '../../types/tvInterface';
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

  const renderItem = useCallback(({item}: {item: TvData}) => {
    if (item.type === 'airingToday') {
      return (
        <View style={styles.wrapper}>
          <Text style={styles.title}>Disponible hoy </Text>
          <Button icon="arrow-forward" />
          {item.data.slice(0, 6).map(dataItem => {
            return <TvCard item={dataItem} />;
          })}
        </View>
      );
    }
    if (item.type === 'popular') {
      return (
        <View style={styles.wrapper}>
          <Text style={styles.title}>Populares </Text>
          <Button icon="arrow-forward" />
          {item.data.slice(0, 6).map((dataItem: TvDetails) => {
            return <TvCard item={dataItem} />;
          })}
        </View>
      );
    }
    if (item.type === 'topRated') {
      return (
        <View style={styles.wrapper}>
          <Text style={styles.title}>Mejores calificadas </Text>
          <Button icon="arrow-forward" />
          {item.data.slice(0, 6).map(dataItem => {
            return (
              <>
                <TvCard item={dataItem} />
              </>
            );
          })}
        </View>
      );
    }
    if (item.type === 'onTheAir') {
      return (
        <View style={styles.wrapper}>
          <Text style={styles.title}>Al aire </Text>
          <Button icon="arrow-forward" />
          {item.data.slice(0, 6).map(dataItem => {
            return <TvCard item={dataItem} />;
          })}
        </View>
      );
    }
    return null;
  }, []);

  return (
    <View style={{backgroundColor: colors.darkPink, paddingTop: top}}>
      <FlatList
        data={tvData}
        contentContainerStyle={styles.contentContainer}
        renderItem={renderItem}
        numColumns={2}
        // keyExtractor={}
      />
    </View>
  );
};
