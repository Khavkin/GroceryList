import {Action} from '@ngrx/store';
import { categoryActionTypes } from '../constants/category.constants';
import { Category } from 'src/app/category';

export class Load implements Action {
  readonly type = categoryActionTypes.LOAD;

  constructor(public payload: Category[]) {

  }

}

export class Add implements Action {
  readonly type = categoryActionTypes.ADD;

  constructor(public payload: Category) {

  }

}

export class Update implements Action {
  readonly type = categoryActionTypes.UPDATE;

  constructor(public payload: Category) {

  }
}

export class Delete implements Action {
  readonly type = categoryActionTypes.DELETE;

  constructor(public payload: {id: number}) {

  }
}


export type CategoriesActionUnion = Load | Add | Update | Delete;
