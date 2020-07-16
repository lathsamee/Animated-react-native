import {StyleSheet} from 'react-native';
import {Theme, Color} from '../utils';

const HEADER_IMAGE_HEIGHT = Theme.relativeHeight(30);
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  /*header style*/
  headerLeftIcon: {
    position: 'absolute',
    left: Theme.relativeWidth(2),
  },
  headerRightIcon: {
    position: 'absolute',
    right: Theme.relativeWidth(2),
  },
  headerStyle: {
    height: Theme.APPBAR_HEIGHT,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 200,
  },
  headerTitle: {
    textAlign: 'center',
    justifyContent: 'center',
    color: Color.HEADER_TEXT_COLOR,
    fontSize: Theme.fontNormal,
  },
  /*Top Image Style*/
  headerImageStyle: {
    height: HEADER_IMAGE_HEIGHT,
    width: '100%',
    top: 0,
    alignSelf: 'center',
    position: 'absolute',
  },
  /*profile image style*/
  profileImage: {
    position: 'absolute',
    zIndex: 100,
  },
  /*profile title style*/
  profileTitle: {
    position: 'absolute',
    zIndex: 100,
    textAlign: 'center',
    color: Color.BLACK,
    top: Theme.relativeHeight(35),
    left: 0,
    right: 0,
    fontSize: Theme.fontXLarge,
  },
  /*song count text style*/
  songCountStyle: {
    position: 'absolute',
    textAlign: 'center',
    fontWeight: '400',
    top: Theme.relativeHeight(40),
    left: 0,
    right: 0,
    fontSize: Theme.fontNormal,
  },
  artistCardContainerStyle: {
    backgroundColor: Color.CARD_BG_COLOR,
    elevation: 5,
    shadowRadius: 3,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    padding: 15,
    marginVertical: Theme.relativeWidth(1),
    marginHorizontal: Theme.relativeWidth(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  artistImage: {
    height: Theme.relativeWidth(15),
    width: Theme.relativeWidth(15),
    borderRadius: Theme.relativeWidth(7.5),
  },
  songTitleStyle: {
    fontSize: Theme.fontNormal,
    color: Color.BLACK,
  },
  cardTextContainer: {
    flex: 1,
    margin: Theme.relativeWidth(3),
  },
});
