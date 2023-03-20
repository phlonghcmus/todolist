import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slices/todosSlice/todos';
import filtersReducer from './slices/filtersSlice/filters';
export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
