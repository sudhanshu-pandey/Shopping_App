import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  linear: {
    flex: 1,
  },
  container: {
    marginTop: 25,
    marginHorizontal: 30,
  },
  headerText: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: 28,
    lineHeight: 42,
    marginTop: 25,
  },
  textInput: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    borderRadius: 12,
    paddingHorizontal: 40,
    lineHeight: 27,
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: 18,
  },
  searchIcon: {
    marginHorizontal: 10,
    marginTop: -38,
  },
  bannerContainer: {
    flexDirection: 'row',
    marginVertical: 30,
    overflow: 'scroll',
    height:57
  },
  individualBanner: {
    height: 41,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  bannertext: {
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    marginHorizontal: 22,
    color: '#FFFFFF',
  },
});

export default styles;
