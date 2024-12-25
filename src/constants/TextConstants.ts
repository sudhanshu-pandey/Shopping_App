import {ImageSourcePropType} from 'react-native';
import IMAGE from './ImageConstants';

export interface BannerItem {
  id: number;
  Images: ImageSourcePropType;
  Name: string;
  Price: number;
}

const TEXT = {
  MATCH_YOUR_STYLE: 'Match Your Style',
  SEARCH: 'Search',
  SIZE: 'Size',
  COLORS: 'Colors',
  ADD_TO_CART: 'Add to Cart',
  MY_CART: 'My Cart',
  TOTAL: 'TOTAL:',
  SHIPPING: 'SHIPPING:',
  GRANDTOTAL: 'Grand Total:',
  CHECKOUT: "Checkout",
  FAVOURITE: "Favourite"
};

const BANNER_TEXT = ['Trending Now', 'All', 'New', 'Latest', 'Fashion'];
const SIZE_TEXT = ['S', 'M', 'L', 'XL'];
const COLORS = [
  '#91A1B0',
  '#B11D1D',
  '#1F44A3',
  '#9F632A',
  '#1D752B',
  '#000000',
];

const BANNER_ITEM: BannerItem[] = [
  {
    id: 1,
    Images: IMAGE.DRESS1,
    Name: 'Jacket Jeans',
    Price: 45.9,
  },
  {
    id: 2,
    Images: IMAGE.DRESS2,
    Name: 'Acrylic Sweater',
    Price: 37.9,
  },
  {
    id: 3,
    Images: IMAGE.DRESS3,
    Name: 'Denim',
    Price: 43.9,
  },
  {
    id: 4,
    Images: IMAGE.DRESS4,
    Name: 'Sweater',
    Price: 41.9,
  },
  {
    id: 5,
    Images: IMAGE.DRESS4,
    Name: 'Sweater',
    Price: 41.9,
  },
  {
    id: 6,
    Images: IMAGE.DRESS4,
    Name: 'Sweater',
    Price: 41.9,
  },
  {
    id: 7,
    Images: IMAGE.DRESS3,
    Name: 'Denim',
    Price: 43.9,
  },
  {
    id: 8,
    Images: IMAGE.DRESS4,
    Name: 'Sweater',
    Price: 41.9,
  },
  {
    id: 9,
    Images: IMAGE.DRESS4,
    Name: 'Sweater',
    Price: 41.9,
  },
  {
    id: 10,
    Images: IMAGE.DRESS4,
    Name: 'Sweater',
    Price: 41.9,
  },
  {
    id: 11,
    Images: IMAGE.DRESS3,
    Name: 'Denim',
    Price: 43.9,
  },
  {
    id: 12,
    Images: IMAGE.DRESS4,
    Name: 'Sweater',
    Price: 41.9,
  },
  {
    id: 13,
    Images: IMAGE.DRESS4,
    Name: 'Sweater',
    Price: 41.9,
  },
  {
    id: 14,
    Images: IMAGE.DRESS4,
    Name: 'Sweater',
    Price: 41.9,
  },
];

export {BANNER_TEXT, BANNER_ITEM, SIZE_TEXT, COLORS};

export default TEXT;
