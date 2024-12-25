import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  linear: {
    flex: 1,
  },
  headerContainer: {
    marginHorizontal: 30
  },
  detailImage: {
    marginVertical: 15,
    width:'100%',
    height:403,
  },
  detailContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:30
  },
  itemName: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: 20,
    lineHeight:30,
    color: "#444444"
  },
  itemPrice: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: 20,
    lineHeight:30,
    color: "#4D4C4C"
  },
  sizeText: {
    marginHorizontal: 30,
    marginVertical: 10,
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: 18,
    lineHeight: 30,
    color: "#444444"
  },
  sizeContainer: {
    marginHorizontal: 30,
    flexDirection: 'row',
  },
  sizeItem: {
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: "#ffffff",
    alignItems:'center',
    justifyContent:'center',
    marginRight: 15,
  },
  sizeMeasureText: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 27,
    color: "#444444"
  },
  colorText: {
    marginTop: 30,
    marginHorizontal: 30,
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: 18,
    lineHeight: 30,
    color: "#444444",
  },
  colorContainer: {
    height: 48,
    width: 48,
    borderRadius: 24,
    borderWidth: 2,
    backgroundColor: "#ffffff",
    alignItems:'center',
    justifyContent:'center',
    marginRight: 2
  },
  color: {
    height: 36,
    width: 36,
    borderRadius: 18
  },
  button: {
    width:'84%',
    marginHorizontal: 30
  }
});

export default styles;
