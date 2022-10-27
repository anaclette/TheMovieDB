import React, {useState, useCallback} from 'react';
import {
  TouchableOpacity,
  Text,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import Button from '../Button';
import TvCard from '../TvCard';
import {TvDetails} from '../../types/tvInterface';
import {styles} from './categoryAccordion.style';

interface Props {
  title: string;
  data: TvDetails[];
}

export const CategoryAccordion = ({title, data}: Props) => {
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
      <TouchableOpacity
        onPress={() => {
          animation();
          setIsExpanded((prevIsExpanded: boolean) => !prevIsExpanded);
        }}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>

      {isExpanded && (
        <>
          <Button icon="arrow-forward" />
          {data.map((dataItem, index) => {
            return <TvCard key={index.toString()} item={dataItem} />;
          })}
        </>
      )}
    </>
  );
};
