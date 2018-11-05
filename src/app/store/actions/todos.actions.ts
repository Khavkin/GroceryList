import {Action} from '@ngrx/store';
import { todoActionTypes } from '../constants/todo.constants';
import { Todo } from 'src/app/todo';

export class Load implements Action {
  readonly type = todoActionTypes.LOAD;

  constructor(public payload: Todo[]) {

  }

}

export class Add implements Action {
  readonly type = todoActionTypes.ADD;

  constructor(public payload: Todo) {

  }

}

export class Update implements Action {
  readonly type = todoActionTypes.UPDATE;

  constructor(public payload: Todo) {

  }
}

export class Delete implements Action {
  readonly type = todoActionTypes.DELETE;

  constructor(public payload: {id: number}) {

  }
}


export type TodosActionUnion = Load | Add | Update | Delete;
