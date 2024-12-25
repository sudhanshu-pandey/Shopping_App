import {RouteProp, useRoute} from '@react-navigation/native';
import DetailScreen from '../views/Detail/DetailScreen';
import {BannerItem, COLORS, SIZE_TEXT} from '../constants/TextConstants';
import {useMemo, useState} from 'react';
import {navigate} from '../services/Navigation';
import {useDispatch} from 'react-redux';
import {addItem} from '../redux/slice/CartSlice';

type RootStackParamList = {
  DetailScreen: BannerItem;
};

const DetailScreenViewModel = () => {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number>(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);
  const route = useRoute<RouteProp<RootStackParamList, 'DetailScreen'>>();
  const item = route.params;
  const dispatch = useDispatch();
  const data = useMemo(() => {
    return {
      data: item,
      size: SIZE_TEXT[selectedSizeIndex],
      color: COLORS[selectedColorIndex],
    };
  }, [item, selectedSizeIndex, selectedColorIndex]);
  
  const onSizePress = (index: number) => {
    setSelectedSizeIndex(index);
  };
  const onColorPress = (index: number) => {
    setSelectedColorIndex(index);
  };
  const goToCart = () => {
    dispatch(addItem(data));
    navigate('Cart');
  };

  return (
    <DetailScreen
      {...{
        item,
        selectedSizeIndex,
        onSizePress,
        selectedColorIndex,
        onColorPress,
        goToCart,
      }}
    />
  );
};

export default DetailScreenViewModel;
