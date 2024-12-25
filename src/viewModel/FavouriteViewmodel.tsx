import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import FavouritemScreen from '../views/Favourite/FavouriteScreen';

const FavouriteViewModel = () => {
  const data = useSelector((state: RootState) => state?.Favourite?.items);
  return (
    <FavouritemScreen
      {...{
        data,
      }}
    />
  );
};

export default FavouriteViewModel;
