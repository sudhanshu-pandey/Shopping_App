import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {BannerItem} from '../../constants/TextConstants';

interface FaviouriteState {
  items: BannerItem[];
}

const initialState: FaviouriteState = {
  items: [],
};

const FavOuriteSlice = createSlice({
  name: 'favourite',
  initialState: initialState,
  reducers: {
    addItem: (state, action: PayloadAction<BannerItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        item => item?.id !== action.payload,
      );
    },
  },
});

export const {addItem, removeItem} = FavOuriteSlice.actions;
export default FavOuriteSlice.reducer;
