import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from './store/models/app-store.interface';
import { categoryActionTypes } from './store/constants/category.constants';
import { Category } from './category';
import { todoActionTypes } from './store/constants/todo.constants';
import { Todo } from './todo';
import { DataServiceModule } from './data-service.module';
import { SharingDataService } from './sharing-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Grocery List';

  constructor (private store: Store<AppStore>, private data: DataServiceModule,
              private sharingDS: SharingDataService ) {  }

  ngOnInit(): void {
    this.storeInit();
    this.sharingDS.currentCategoryChanges.subscribe(value => this.doCategoryChanges(value));

  }

  storeInit(): void {
    // const Categories: Category[] = [{id: 0, name: 'name1'}, {id: 1, name: 'name2'}];
    // const Todos: Todo[] = [{ id: 0, description: 'desc1', isComplete: false, categoryId: 0 },
    //  { id: 1, description: 'desc2', isComplete: true, categoryId: 0 }];

    // подключить работу с базой

    this.data.getCategories().subscribe(values => {
      // console.log('GetCategories from server:', values);

        this.store.dispatch({
          type: categoryActionTypes.LOAD,
          payload: values
        });
      }
    );


    this.data.getTodos(null).subscribe(values => {
      this.store.dispatch({
        type: todoActionTypes.LOAD,
        payload: values
      });
    });

    console.log('Store inited');
  }

  doCategoryChanges(value: { operationType: string, data: Category }) {
    if (value) {
      switch (value.operationType) {
        case 'ADD':
          this.data.addCategory(value.data.name)
            .subscribe((data: Category) => {
              this.store.dispatch({
                type: categoryActionTypes.ADD,
                payload: data
              });
            } );
          break;
        case 'UPDATE':
          break;
        case 'DELETE':
          break;
        default:
          console.log(value);
      }
      console.log(value);
    }
  }
}
