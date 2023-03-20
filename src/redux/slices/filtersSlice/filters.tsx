import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilter } from '../../../share/types';
import { RootState } from '../../store';
const initialState: IFilter = {
  search: '',
  status: 'All',
  priority: [],
};
const filtersSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    searchFilterChange(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    statusFilterChange(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    priorityFilterChange(state, action: PayloadAction<string[]>) {
      state.priority = action.payload;
    },
  },
});

export const { searchFilterChange, statusFilterChange, priorityFilterChange } =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const selectFilters = (state: RootState) => state.filters;
export default filtersReducer;
