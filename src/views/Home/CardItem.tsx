import React, { useEffect } from 'react';
import {Text, Image, StyleSheet, Pressable, View} from 'react-native';
import IMAGE from '../../constants/ImageConstants';
import { navigate } from '../../services/Navigation';
import { BannerItem } from '../../constants/TextConstants';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface CardItemProps {
  item: BannerItem;
  isFavorite?: boolean;
  toggleHeart?: (item: BannerItem) => void;
}

const CardItem: React.FC<CardItemProps> = ({item, isFavorite, toggleHeart}) => {
  return (
    <Pressable style={styles.container} onPress={() =>navigate("Detail", item)}>
      <Image source={item.Images} style={styles.image} />
      {toggleHeart && <Pressable
        style={styles.heartContainer}
        onPress={() => toggleHeart(item)}>
        <Image source={isFavorite ? IMAGE.FILLHEART : IMAGE.HEART} />
      </Pressable>}
      <Text style={styles.name}>{item.Name}</Text>
      <Text style={styles.price}>${item.Price?.toFixed(2)}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 18,
    marginBottom: 15,
  },
  image: {
    width: 162,
    height: 256,
    resizeMode: 'cover',
    marginBottom: 5,
    borderRadius: 20,
  },
  heartContainer: {
    position: 'absolute',
    right: 15,
    top: 15,
    height: 26,
    width: 26,
    borderRadius: 13,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 500,
    color: '#444444',
    lineHeight: 27,
    marginLeft: 5,
  },
  price: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: 18,
    lineHeight: 27,
    color: '#9C9C9C',
    marginLeft: 5,
  },
});

export default CardItem;
