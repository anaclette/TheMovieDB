import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: metrics.scaleVertical(35),
  },
  imageWrapper: {
    width: metrics.screenWidth,
    height: metrics.scaleVertical(200),
    opacity: 0.8,
  },
  image: {
    flex: 1,
  },
  sectionTitle: {
    ...fonts.Amatic,
  },
  title: {
    ...fonts.InconsolataMedium,
    fontSize: metrics.scale(18),
    color: colors.palePink,
    paddingLeft: metrics.scale(10),
  },
  movieTitle: {
    ...fonts.HindSiliguri,
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
    justifyContent: 'space-between',
    marginTop: metrics.scaleVertical(5),
    position: 'absolute',
    left: 0,
    top: metrics.scale(-27),
    height: '16%',
    backgroundColor: colors.transparentTeal,
    width: '100%',
  },

  ratingWrapper: {
    position: 'absolute',
    right: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
    bottom: metrics.scale(13),
    backgroundColor: colors.transparentLightTeal,
    height: '15%',
    borderTopLeftRadius: metrics.scale(10),
    borderBottomLeftRadius: metrics.scale(10),
    paddingHorizontal: metrics.scale(7),
    alignSelf: 'flex-end',
  },

  shadow: {
    shadowColor: colors.palePink,
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: metrics.scale(5),
  },
});
