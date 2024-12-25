import {SafeAreaView, Text, Image, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Header from '../../components/Header';
import {View} from 'react-native';
import TEXT, {
  BannerItem,
  COLORS,
  SIZE_TEXT,
} from '../../constants/TextConstants';
import Buttons from '../../components/Buttons';
import IMAGE from '../../constants/ImageConstants';

interface DetailScreenProps {
  item: BannerItem;
  selectedSizeIndex: number;
  selectedColorIndex: number;
  onSizePress: (index: number) => void;
  onColorPress: (index: number) => void;
  goToCart: () => void;
}

const DetailScreen: React.FC<DetailScreenProps> = ({
  item,
  selectedSizeIndex,
  selectedColorIndex,
  onSizePress,
  onColorPress,
  goToCart,
}) => {
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.linear}>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <Header LeftIcon={IMAGE.BACK} />
        </View>
        <Image source={item.Images} style={styles.detailImage} />
        <View style={styles.detailContainer}>
          <Text style={styles.itemName}>{item.Name}</Text>
          <Text style={styles.itemPrice}>${item.Price?.toFixed(2)}</Text>
        </View>
        <Text style={styles.sizeText}>{TEXT.SIZE}</Text>
        <View style={styles.sizeContainer}>
          {SIZE_TEXT.map((item: string, index: number) => {
            return (
              <Pressable
                key={index}
                style={styles.sizeItem}
                onPress={() => onSizePress(index)}>
                <Text
                  style={[
                    styles.sizeMeasureText,
                    {
                      color:
                        selectedSizeIndex === index ? '#E55B5B' : '#444444',
                    },
                  ]}>
                  {item}
                </Text>
              </Pressable>
            );
          })}
        </View>
        <Text style={styles.colorText}>{TEXT.COLORS}</Text>
        <View style={styles.sizeContainer}>
          {COLORS.map((item: string, index: number) => {
            return (
              <Pressable
                key={index}
                style={[
                  styles.colorContainer,
                  {
                    borderColor:
                      selectedColorIndex === index ? item : '#ffffff',
                  },
                ]}
                onPress={() => onColorPress(index)}>
                <View style={[styles.color, {backgroundColor: item}]}></View>
              </Pressable>
            );
          })}
        </View>
        <View style={styles.button}>
          <Buttons BtnText={TEXT.ADD_TO_CART} goToCart={goToCart} />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default DetailScreen;
