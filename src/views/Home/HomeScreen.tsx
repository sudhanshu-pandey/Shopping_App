import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import IMAGE from '../../constants/ImageConstants';
import Header from '../../components/Header';
import TEXT, {BANNER_ITEM, BANNER_TEXT, BannerItem} from '../../constants/TextConstants';
import CardItem from './CardItem';

interface HomeScreenProps {
  selectedIndex: number;
  favorites: {[key: number]: boolean};
  onBannerPress: (index: number) => void;
  toggleHeart: (item: BannerItem) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({
  selectedIndex,
  onBannerPress,
  favorites,
  toggleHeart,
}) => {
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.linear}>
      <SafeAreaView style={styles.container}>
        <Header LeftIcon={IMAGE.DOT} />
        <Text style={styles.headerText}>{TEXT.MATCH_YOUR_STYLE}</Text>
        <TextInput style={styles.textInput} placeholder={TEXT.SEARCH} />
        <Image style={styles.searchIcon} source={IMAGE.SEARCH} />
        <ScrollView
          style={styles.bannerContainer}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {BANNER_TEXT.map((item: string, index: number) => {
            return (
              <Pressable
                key={index}
                style={[
                  styles.individualBanner,
                  {
                    backgroundColor:
                      index === selectedIndex ? '#E96E6E' : '#DFDCDC',
                  },
                ]}
                onPress={() => onBannerPress(index)}>
                <Text
                  style={[
                    styles.bannertext,
                    {color: index === selectedIndex ? '#FFFFFF' : '#938F8F'},
                  ]}>
                  {item}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
        <FlatList
          data={BANNER_ITEM}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => (
            <CardItem
              item={item}
              isFavorite={favorites[item.id] || false}
              toggleHeart={toggleHeart}
            />
          )}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 270}}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;
