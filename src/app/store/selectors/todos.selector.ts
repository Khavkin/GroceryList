import { AppStore } from '../models/app-store.interface';
import { createSelector } from '@ngrx/store';
import { Todo } from 'src/app/todo';
import { TodoList } from '../models/todo.interface';

export const getTodoList = (state: AppStore) => state.Todo.list;

export const getTodosByCategoryId = createSelector(
    getTodoList,
    (state: Todo[], props: { categoryId: number }) => {
        console.log(state, props);
        const todos: Todo[] = state.filter(item => item.categoryId === props.categoryId);

        return todos;
    }
);
