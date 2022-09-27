import {StyleSheet} from 'react-native';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: metrics.scaleVertical(50),
    flexDirection: 'row',
    alignItems: 'center',
  },
});
