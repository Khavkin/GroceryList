import { AppStore } from '../models/app-store.interface';
import { createSelector } from '@ngrx/store';
import { Category } from 'src/app/category';

export const getCategoryList = (state: AppStore) => state.Category.list;

export const getCategoryById = createSelector(
    getCategoryList,
    (state: Category[], props: { id: number }) => {
        console.log(state, props);
        const categoryIndex = state.findIndex(item => item.id === props.id);

        return state[categoryIndex];
    });
