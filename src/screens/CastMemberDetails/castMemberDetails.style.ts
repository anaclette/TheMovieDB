import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: colors.petroleum,
  },
  combinedCreditsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  cardWrappingButton: {
    marginVertical: metrics.scale(5),
    marginHorizontal: metrics.scale(1),
    width: '48%',
  },
  personalInfoWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  personalInfoDetails: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImageWrapper: {
    width: '32%',
    height: metrics.scaleVertical(150),
  },
  image: {
    flex: 1,
  },
  profileImage: {
    borderBottomLeftRadius: metrics.scale(20),
    borderTopRightRadius: metrics.scale(20),
    resizeMode: 'contain',
  },
  name: {
    ...fonts.HindSiliguri,
    color: colors.palePink,
    fontSize: metrics.scaledFontSize(20),
  },
  secondaryDetailsText: {
    ...fonts.HindSiliguri,
    color: colors.palePink,
  },
  biographyWrapper: {
    marginTop: metrics.scale(30),
  },
  biography: {
    marginHorizontal: metrics.scale(15),
    ...fonts.HindSiliguri,
    color: colors.palePink,
    fontSize: metrics.scaledFontSize(17),
    textAlign: 'justify',
  },
  otherCreditsTitle: {
    ...fonts.Arvo,
    color: colors.palePink,
    fontSize: metrics.scaledFontSize(18),
    marginLeft: metrics.scale(15),
    marginVertical: metrics.scale(20),
  },
  backButton: {
    top: metrics.scale(10),
    position: 'absolute',
    zIndex: 1,
    left: metrics.scale(5),
    backgroundColor: colors.petroleum,
    borderRadius: metrics.scale(10),
  },
});
