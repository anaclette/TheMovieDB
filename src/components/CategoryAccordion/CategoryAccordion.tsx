import React, {useState, useCallback} from 'react';
import {LayoutAnimation, Platform, UIManager} from 'react-native';
import Button from '../Button';
import TvCard from '../TvCard';
import {TvDetails} from '../../types/tvInterface';
import {styles} from './categoryAccordion.style';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/NavigationController';
import {TvTypes} from '../../types/mediaContentTypes';

interface Props {
  title: string;
  data: TvDetails[] | undefined;
  type: TvTypes;
}

type NavProp = NavigationProp<RootStackParamList, 'FullCategoryContent'>;

export const CategoryAccordion = ({title, data, type}: Props) => {
  const navigation = useNavigation<NavProp>();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const isAndroid = Platform.OS === 'android';

  if (isAndroid) {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  const animation = useCallback(() => {
    return LayoutAnimation.configureNext(
      isAndroid
        ? LayoutAnimation.Presets.linear
        : LayoutAnimation.Presets.spring,
    );
  }, [isAndroid]);

  return (
    <>
      <Button
        onPress={() => {
          animation();
          setIsExpanded((prevIsExpanded: boolean) => !prevIsExpanded);
        }}
        textStyle={styles.title}
        text={title}
        wrapperStyle={styles.title}
      />

      {isExpanded && (
        <>
          <Button
            moreButton
            wrapperStyle={styles.moreButton}
            onPress={() => {
              navigation.navigate('FullCategoryContent', {
                type: type,
              });
            }}
            icon="arrow-forward"
          />
          {data?.map((dataItem, index) => {
            return <TvCard key={index.toString()} item={dataItem} />;
          })}
        </>
      )}
    </>
  );
};
