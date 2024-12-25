import {useEffect, useState} from 'react';
import HomeScreen from '../views/Home/HomeScreen';
import {useDispatch, useSelector} from 'react-redux';
import {addItem, removeItem} from '../redux/slice/FavouriteSlice';
import {BannerItem} from '../constants/TextConstants';
import {RootState} from '../redux/store';

const HomeScreenViewModel = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [favorites, setFavorites] = useState<{[key: number]: boolean}>({});
  const dispatch = useDispatch();
  const FavouriteItem = useSelector(
    (state: RootState) => state?.Favourite?.items,
  );

  useEffect(() => {
    const initialFavorites = FavouriteItem.reduce(
      (acc: {[key: number]: boolean}, item: {id: number}) => {
        acc[item.id] = true;
        return acc;
      },
      {},
    );
    setFavorites(initialFavorites);
  }, [FavouriteItem]);
  
  const toggleHeart = (item: BannerItem) => {
    const isFavorite = favorites[item.id];
    setFavorites(prevFavorites => ({
      ...prevFavorites,
      [item.id]: !isFavorite,
    }));
    if (isFavorite) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(addItem(item));
    }
  };
  const onBannerPress = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <HomeScreen
      {...{
        selectedIndex,
        onBannerPress,
        favorites,
        toggleHeart,
      }}
    />
  );
};

export default HomeScreenViewModel;
