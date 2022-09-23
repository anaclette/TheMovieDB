import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

const ITEM_SIZE = metrics.screenWidth / 1.5;
const WINDOW_TOP_DISTANCE = metrics.screenHeight / 2.1;

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: WINDOW_TOP_DISTANCE,
    marginVertical: metrics.scaleVertical(20),
  },
  imageContainer: {
    width: ITEM_SIZE - metrics.scale(25),
    borderRadius: metrics.scale(20),
    height: WINDOW_TOP_DISTANCE - metrics.scale(30),
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 0.65,
    shadowRadius: 2.84,
    shadowColor: colors.blackChocolate,
  },
  poster: {
    borderRadius: metrics.scale(20),
    flex: 1,
  },
  movieTitle: {
    fontSize: metrics.scale(17),
    marginBottom: metrics.scale(25),
  },
  title: {
    textAlign: 'center',
    ...fonts.InconsolataMedium,
    color: colors.blackChocolate,
  },
  overviewContainer: {
    paddingVertical: metrics.scale(25),
    justifyContent: 'space-between',
    height: WINDOW_TOP_DISTANCE / 1.2,
  },
  overviewImageContainer: {
    width: ITEM_SIZE / 2,
    marginHorizontal: metrics.scale(5),
    height: WINDOW_TOP_DISTANCE / 2.3 + metrics.scale(30),
  },
  overviewMovieTitle: {
    alignSelf: 'center',
    paddingVertical: 20,
    width: ITEM_SIZE / 2.1,
    fontSize: metrics.scale(11),
  },
});
