import {FlatList, SafeAreaView, View} from 'react-native';
import TEXT, {BannerItem} from '../../constants/TextConstants';
import React from 'react';
import CardItem from '../Home/CardItem';
import styles from './style';
import Header from '../../components/Header';
import IMAGE from '../../constants/ImageConstants';

interface FavouriteScreenProps {
  data: BannerItem[];
}

const FavouritemScreen: React.FC<FavouriteScreenProps> = ({data}) => {
  return (
    <SafeAreaView style={styles.container}>
        <Header LeftIcon={IMAGE.BACK} text={TEXT.FAVOURITE}/>
        <View style={styles.flatlistcontainer}>

      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <CardItem
            item={item}
          />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
      />
        </View>
    </SafeAreaView>
  );
};

export default FavouritemScreen;
