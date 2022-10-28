import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  title: {
    ...fonts.Arvo,
    fontSize: metrics.scaledFontSize(20),
    color: colors.lightBlue,
  },
  overview: {
    ...fonts.HindSiliguri,
    fontSize: metrics.scaledFontSize(17),
    color: colors.palePink,
  },
  modalInnerWrapper: {
    backgroundColor: colors.petroleum,
    flex: 1,
  },
  detailsContainer: {
    paddingHorizontal: metrics.scale(15),
    paddingVertical: metrics.scale(20),
    backgroundColor: colors.petroleum,
  },
  previewContainer: {
    flex: 1,
    padding: metrics.scale(10),
    backgroundColor: colors.petroleum,
    justifyContent: 'space-evenly',
  },
  imgContainer: {
    width: '100%',
    height: '70%',
  },
  posterImage: {
    flex: 1,
  },
  backButton: {
    top: metrics.scale(40),
    position: 'absolute',
    zIndex: 1,
    left: metrics.scale(5),
    backgroundColor: colors.palePink,
    borderRadius: metrics.scale(15),
  },
  closeModalButton: {
    marginTop: metrics.scale(10),
    alignSelf: 'center',
  },
  genreWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  genreItem: {
    ...fonts.HindSiliguri,
    fontSize: metrics.scaledFontSize(17),
    borderColor: colors.lightBlue,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: metrics.scale(10),
    color: colors.palePink,
    alignSelf: 'center',
    paddingHorizontal: metrics.scale(10),
    margin: metrics.scale(5),
  },
});
