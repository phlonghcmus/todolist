import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { ITodo } from '../../../share/types';

const initialState: ITodo[] = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(state, action: PayloadAction<ITodo>) {
      state.push(action.payload);
    },
    toggleCompleted(state, action: PayloadAction<string>) {
      return state.map((todo: ITodo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

export const { todoAdded, toggleCompleted } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
export const selectTodos = (state: RootState) => {
  return state.todos.filter((todo) => {
    return todo.name.includes(state.filters.search);
  });
};
export default todosReducer;
