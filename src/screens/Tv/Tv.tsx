import React from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, View} from 'react-native';
import CategoryAccordion from '../../components/CategoryAccordion';
import {useTv} from '../../hooks/useTv';
import {TvCategoryTranslationKeys} from '../../locale/translations/keys';
import {TvDetails} from '../../types/tvInterface';
import {styles} from './tv.style';

type TvTypes =
  | 'ON_THE_AIR_TV_SHOWS'
  | 'AIRING_TODAY_TV_SHOWS'
  | 'POPULAR_TV_SHOWS'
  | 'TOP_RATED_TV_SHOWS';

type TvData = {
  type: TvTypes;
  data: TvDetails[];
};

export const Tv = () => {
  const {airingToday, onTheAir, popular, topRated} = useTv();
  const {t} = useTranslation();

  const tvData: TvData[] = [
    {
      data: onTheAir,
      type: 'ON_THE_AIR_TV_SHOWS',
    },
    {
      data: airingToday,
      type: 'AIRING_TODAY_TV_SHOWS',
    },
    {
      data: popular,
      type: 'POPULAR_TV_SHOWS',
    },
    {
      data: topRated,
      type: 'TOP_RATED_TV_SHOWS',
    },
  ];

  const renderItem = ({item, index}: {item: TvData; index: number}) => (
    <CategoryAccordion
      key={index.toString()}
      title={t(TvCategoryTranslationKeys[item.type])}
      data={item.data.slice(0, 6)}
    />
  );

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
