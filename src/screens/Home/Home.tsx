import React, {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import Loader from '../../components/Loader';
import TrendyContentBlock from '../../components/TrendyContentBlock';
import {useGetTrendyContentQuery} from '../../state/themoviedb';
import {TrendyContentResult} from '../../types/trendyContentInterface';

import {styles} from './home.style';
import {TranslationKeys} from '../../locale/translations/keys';
import metrics from '../../themes/metrics';
import colors from '../../themes/colors';
import {useAppSelector} from '../../state/hooks';

const renderItem = ({
  item,
  index,
}: {
  item: TrendyContentResult;
  index: number;
}) => {
  return <TrendyContentBlock item={item} index={index} />;
};

export const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const languageOptions = useAppSelector(
    state => state.i18nSlice.supportedLangs,
  );
  const {data: trendyData, isSuccess} = useGetTrendyContentQuery({
    page: pageNumber,
    currentLanguage: languageOptions.en,
  });

  const {t} = useTranslation();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const loadMore = () => {
    setTimeout(() => {
      setPageNumber(pageNumber + 1);
    }, 500);
  };

  return !isSuccess || refreshing ? (
    <Loader />
  ) : (
    <View style={styles.container}>
      <Text style={styles.title}>
        {t(TranslationKeys.EVERYBODY_IS_WATCHING)}
      </Text>

      <FlatList
        removeClippedSubviews
        maxToRenderPerBatch={5}
        updateCellsBatchingPeriod={30}
        initialNumToRender={7}
        keyExtractor={(_, index) => index.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={trendyData}
        renderItem={renderItem}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator
              size={metrics.scale(20)}
              color={colors.palePink}
            />
          </View>
        }
      />
    </View>
  );
};
