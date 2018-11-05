import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Category } from './category';
import { SharingDataService } from './sharing-data.service';
import { ErrorMessage } from './error-message';
import { Todo } from './todo';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})


  @Injectable({
    providedIn: 'root'
  })
export class DataServiceModule {

  categoryURL = 'http://localhost:3000/category';
  todoURL = 'http://localhost:3000/todo';


  constructor( private http: HttpClient, private sharingDS: SharingDataService) {

  }

// Work with Category
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryURL, httpOptions)
      .pipe(
        tap(categories => console.log('fetched categories', categories)),
        catchError(this.handleError({ moduleName: 'data-service', message: 'getCategories error'}, []))
      );
  }

  addCategory(name: string): Observable<Category> {
    return this.http.post<Category>
      (this.categoryURL, { name }, httpOptions);
    /*     .pipe(
           tap(todo => console.log('add todo', todo)),
           catchError((err) =>
           //{console.log(err); return of(err);}
             this.handleError({ moduleName: 'data-service', message: 'addTodo error'},err)
           )
           );*/

    // this.handleError({ moduleName: 'data-service', message: 'addTodo error'}
  }
  updateCategory(item: Category): Observable<any> {
    console.log(item);

    return this.http.put(`${this.categoryURL}/${item.id}`, item, httpOptions);

    // return this.http.put(this.todoURL, item);
  }

  deleteCategory(id: number): Observable<any> {
    this.deleteTodosByCategoryId(id);
    return this.http.delete(`${this.categoryURL}/${id}`, httpOptions);
  }


  // Work with Todo
  getTodos(categoryId: number | null): Observable<Todo[]> {
    let url: string;
    if (categoryId) {
      url = `this.todoURL?categoryId={categoryId}`;
    } else {
      url = this.todoURL;
    }

    return this.http.get<Todo[]>(url, httpOptions)
      .pipe(
        tap(todos => console.log('fetched todos', todos)),
        catchError(this.handleError({ moduleName: 'data-service', message: 'getTodo error' }, []))
      );
  }


  addTodo(todoDescription: string, categoryID: number): Observable<Todo> {
    return this.http.post<Todo>
        (this.todoURL, { description: todoDescription, isComplete: false, categoryId: categoryID },
        httpOptions);
 /*     .pipe(
        tap(todo => console.log('add todo', todo)),
        catchError((err) =>
        //{console.log(err); return of(err);}
          this.handleError({ moduleName: 'data-service', message: 'addTodo error'},err)
        )
        );*/

// this.handleError({ moduleName: 'data-service', message: 'addTodo error'}
  }
  updateTodo(item: Todo): Observable<any> {
    console.log(item);

    return this.http.put(`${this.todoURL}/${item.id}`, item, httpOptions);

    // return this.http.put(this.todoURL, item);
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.todoURL}/${id}`, httpOptions);
  }

  deleteTodosByCategoryId(id: number) {
     this.getTodos(id).subscribe((todos: Todo[]) =>  {
       todos.forEach(item => this.deleteTodo(item.id).subscribe());
      });


    }




  private handleError<T>(operation: ErrorMessage = { moduleName: 'data-service', message: 'no erros'}, result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      this.sharingDS.sendError(operation);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
