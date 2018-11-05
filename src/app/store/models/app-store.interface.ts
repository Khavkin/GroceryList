import { CategoryList } from './category.interface';
import { TodoList } from './todo.interface';

export interface AppStore {
    Category: CategoryList;
    Todo: TodoList;
}
