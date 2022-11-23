import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: metrics.scaleVertical(8),
  },
  imageWrapper: {
    width: metrics.screenWidth,
    height: metrics.scaleVertical(177),
  },
  image: {
    flex: 1,
  },
  title: {
    ...fonts.InconsolataMedium,
    fontSize: metrics.scale(18),
    color: colors.palePink,
    paddingHorizontal: metrics.scale(10),
    flex: 1,
    paddingVertical: metrics.scaleVertical(5),
  },
  mediaType: {
    ...fonts.HindSiliguri,
    fontSize: metrics.scale(14),
    alignItems: 'flex-end',
    color: colors.palePink,
    paddingRight: metrics.scale(5),
  },
  absolute: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: colors.transparentTeal,
  },

  ratingWrapper: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'flex-end',
    bottom: 0,
    backgroundColor: colors.transparentLightTeal,
    height: '15%',
    borderTopLeftRadius: metrics.scale(10),
    borderBottomLeftRadius: metrics.scale(10),
    paddingHorizontal: metrics.scale(7),
    alignSelf: 'flex-end',
  },

  shadow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.transparentTeal,
    shadowColor: colors.palePink,
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: metrics.scale(5),
  },
});
