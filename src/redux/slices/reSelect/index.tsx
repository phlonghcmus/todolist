import { createSelector } from '@reduxjs/toolkit';
import { selectTodos } from '../todosSlice/todos';
import { selectFilters } from '../filtersSlice/filters';
export const selectToDoRemaning = createSelector(
  selectTodos,
  selectFilters,
  (todos, { search, status, priority }) => {
    return todos.filter((todo) => {
      if (status === 'All')
        return (
          todo.name.includes(search) &&
          (priority.length ? priority.includes(todo.priority) : true)
        );
      else
        return (
          todo.name.includes(search) &&
          (status === 'Completed'
            ? todo.completed === true
            : !todo.completed) &&
          (priority.length ? priority.includes(todo.priority) : true)
        );
    });
  }
);
