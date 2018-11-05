import { CategoryList } from '../models/category.interface';
import { categoryActionTypes } from '../constants/category.constants';
import { CategoriesActionUnion } from '../actions/categories.actions';
import { Category } from 'src/app/category';


const initialState: CategoryList = {
    list: [
        {
            id: 0,
            name: 'Noname'
        }
    ]
};

export function CategoriesReducer(state: CategoryList = initialState, action: CategoriesActionUnion) {
    switch (action.type) {
        case categoryActionTypes.LOAD:
            return {
                list: action.payload
            };

        case categoryActionTypes.ADD: {
            const newState: Category[] = [...state.list];
            newState.push(action.payload);
            return {
                list: newState,
            };
        }

        case categoryActionTypes.UPDATE: {
            const newState: Category[] = [...state.list];
            const categoryIndex = newState.findIndex(item => item.id === action.payload.id);
            newState[categoryIndex].name = action.payload.name;
            return {
                list: newState,
            };
        }
        case categoryActionTypes.DELETE: {
            const newState: Category[] = [...state.list];
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




