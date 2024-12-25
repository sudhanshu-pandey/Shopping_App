import {View, Image, Text, StyleSheet, Pressable} from 'react-native';
import {CartItem} from '../../redux/slice/CartSlice';
import IMAGE from '../../constants/ImageConstants';

interface CartItemsProps {
  item: CartItem;
  deleteData: (id: number) => void
}

const CartItems: React.FC<CartItemsProps> = ({item, deleteData}) => {
  return (
    <View style={styles.cartItemConatiner}>
      <View style={styles.itemContainer}>
        <Image source={item.data.Images} style={styles.imageStyle} />
        <View style={styles.dataContainer}>
          <Text style={styles.nameText}>{item.data.Name}</Text>
          <Text style={styles.priceText}>${item.data.Price?.toFixed(2)}</Text>
          <View style={styles.sizeColorConatiner}>
            <View
              style={[styles.colorContainer, {backgroundColor: item.color}]}
            />
            <View style={styles.sizeContainer}>
              <Text style={styles.sizeText}>{item.size}</Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable onPress={() => deleteData(item.data.id)}>
        <Image source={IMAGE.DELETE} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItemConatiner: {
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'space-between',
  },
  itemContainer: {
    flexDirection: 'row',
  },
  imageStyle: {
    height: 125,
    width: 95,
    borderRadius: 20,
  },
  dataContainer: {
    marginHorizontal: 12,
  },
  nameText: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: 18,
    lineHeight: 27,
    color: '#444444',
  },
  priceText: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: 18,
    lineHeight: 27,
    color: '#797979',
    marginVertical: 10,
  },
  sizeColorConatiner: {
    flexDirection: 'row',
  },
  colorContainer: {
    height: 32,
    width: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  sizeContainer: {
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeText: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: 18,
    lineHeight: 27,
  },
});

export default CartItems;
