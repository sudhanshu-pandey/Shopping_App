import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import Header from '../../components/Header';
import IMAGE from '../../constants/ImageConstants';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import TEXT from '../../constants/TextConstants';
import {CartItem} from '../../redux/slice/CartSlice';
import CartItems from './CartItem';
import Buttons from '../../components/Buttons';

interface CartScreenProps {
  cartItems: CartItem[];
  deleteData: (id: number) => void;
}

const CartScreen: React.FC<CartScreenProps> = ({cartItems, deleteData}) => {
  const TotalPrice = cartItems.reduce(
    (acc: number, item: {data: {Price: number}}) => acc + item.data.Price,
    0,
  );

  const ListHeader = () => (
    <View style={styles.container}>
      <Header LeftIcon={IMAGE.BACK} text={TEXT.MY_CART} />
    </View>
  );

  const ListFooter = () => (
    <View style={styles.billingSection}>
      <View style={styles.pricedata}>
        <Text style={styles.billingText}>{TEXT.TOTAL}</Text>
        <Text style={styles.billingText}>${TotalPrice?.toFixed(2)}</Text>
      </View>
      <View style={styles.pricedata}>
        <Text style={styles.billingText}>{TEXT.SHIPPING}</Text>
        <Text style={styles.billingText}>${(0.0)?.toFixed(2)}</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.pricedata}>
        <Text style={styles.billingText}>{TEXT.GRANDTOTAL}</Text>
        <Text style={styles.billingTotalText}>${TotalPrice?.toFixed(2)}</Text>
      </View>
      <Buttons BtnText={TEXT.CHECKOUT} />
    </View>
  );

  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.linear}>
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          data={cartItems}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => (
            <CartItems item={item} deleteData={deleteData} />
          )}
          ListHeaderComponent={ListHeader}
          ListFooterComponent={ListFooter}
          contentContainerStyle={styles.flatlistContainer}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default CartScreen;
