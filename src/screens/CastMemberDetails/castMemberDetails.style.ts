import {StyleSheet} from 'react-native';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  nameAndImageWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imageWrapper: {
    width: metrics.scale(100),
    height: metrics.scaleVertical(100),
  },
  image: {
    flex: 1,
  },
});
