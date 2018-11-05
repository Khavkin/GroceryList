import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { Store, select } from '@ngrx/store';
import { AppStore } from '../store/models/app-store.interface';
import { SharingDataService } from '../sharing-data.service';
import { Category } from '../category';
import * as todosReducer from '../store/reducers/todos.reducer';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  todos: Todo[];
  category: Category;

  constructor(private store: Store<AppStore>,
              private sharingDataService: SharingDataService) { }

  ngOnInit() {
    this.sharingDataService.currentCategory.subscribe(category => {
      this.category = category;
      this.getTodosByCategoryId(this.category.id);
      console.log('todos-container change category:', category);
    });
  }

  getTodosByCategoryId(categoryId: number): void {
    console.log(categoryId);

    if (!isNaN(categoryId)) {
      this.store.pipe(select(todosReducer.getTodosByCategoryId, { categoryId }))
        .subscribe(value => {
          this.todos = [ ...value ];
          console.log('Todo list select', this.todos);
        });
    }
  }

}
