import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  container: {
    margin: metrics.scale(15),
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
  },
  unclicked: {
    padding: metrics.scale(10),
    flexDirection: 'row',
    width: '95%',
    backgroundColor: colors.palePink,
    borderRadius: metrics.scale(13),
    alignItems: 'center',
  },
  clicked: {
    padding: metrics.scale(10),
    flexDirection: 'row',
    width: '80%',
    backgroundColor: '#d9dbda',
    borderRadius: metrics.scale(13),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    fontSize: metrics.scaledFontSize(20),
    marginLeft: metrics.scale(10),
    width: '90%',
  },
});
