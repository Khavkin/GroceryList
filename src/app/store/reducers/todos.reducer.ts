import { TodoList } from '../models/todo.interface';
import { TodosActionUnion } from '../actions/todos.actions';
import { todoActionTypes } from '../constants/todo.constants';
import { Todo } from 'src/app/todo';
import { AppStore } from '../models/app-store.interface';
import { createSelector } from '@ngrx/store';



const initialState: TodoList = {
    list: [
        {
            id: 0,
            description: 'Noname',
            categoryId: 0,
            isComplete: false
        }
    ]
};

export function TodosReducer(state: TodoList = initialState, action: TodosActionUnion) {
    switch (action.type) {
        case todoActionTypes.LOAD:
            return {
                list: action.payload
            };

        case todoActionTypes.ADD: {
            const newState: Todo[] = [...state.list];
            newState.push(action.payload);
            return {
                list: newState,
            };
        }

        case todoActionTypes.UPDATE: {
            const newState: Todo[] = [...state.list];
            const todoIndex = newState.findIndex(item => item.id === action.payload.id);
            newState[todoIndex].description = action.payload.description;
            newState[todoIndex].isComplete = action.payload.isComplete;
            return {
                list: newState,
            };
        }
        case todoActionTypes.DELETE: {
            const newState: Todo[] = [...state.list];
            const categoryIndex = newState.findIndex(item => item.id === action.payload.id);
            newState.splice(categoryIndex, 1);
            return {
                list: newState,
            };
        }

        default:
            return state;
    }
}

export const getTodoList = (state: any) => {
    console.log('getTodoList', state);

    return state.todos.list;

};

export const getTodosByCategoryId = createSelector(
    getTodoList,
    (state: Todo[], props: { categoryId: number }) => {
        console.log('getTodosByCategory', state, props);
        const todos: Todo[] = state.filter(item => item.categoryId === props.categoryId);
        console.log('getTodosByCategory filtered', todos);

        return todos;
    }
);



