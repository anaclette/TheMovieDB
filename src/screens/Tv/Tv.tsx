import React from 'react';
import {FlatList, View} from 'react-native';
import CategoryAccordion from '../../components/CategoryAccordion';
import {useTv} from '../../hooks/useTv';
import {TvDetails} from '../../types/tvInterface';
import copies from '../../utils/copies';
import {styles} from './tv.style';

type TvTypes = 'onTheAir' | 'airingToday' | 'popular' | 'topRated';

type TvData = {
  type: TvTypes;
  data: TvDetails[];
};

const renderItem = ({item, index}: {item: TvData; index: number}) => (
  <CategoryAccordion
    key={index.toString()}
    title={copies.es.tv.categoryTitles[item.type]}
    data={item.data.slice(0, 6)}
  />
);

export const Tv = () => {
  const {airingToday, onTheAir, popular, topRated} = useTv();
  const tvData: TvData[] = [
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
  ];

  return (
    <View style={styles.wrapper}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={tvData}
        renderItem={renderItem}
      />
    </View>
  );
};
