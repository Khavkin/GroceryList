import { Injectable, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from './category';
import { ErrorMessage } from './error-message';
import { Todo } from './todo';

@NgModule({
    imports: [

    ],
    exports: [

    ],
    declarations: []
})

@Injectable()
export class SharingDataService {

    private categorySource = new BehaviorSubject(new Category);
    currentCategory = this.categorySource.asObservable();

    private messageSource = new BehaviorSubject('default message');
    currentMessage = this.messageSource.asObservable();

    private errorSource = new BehaviorSubject(new ErrorMessage);
    currentError = this.errorSource.asObservable();

    private changeCategorySource = new BehaviorSubject({operationType: '', data: new Category});
    currentCategoryChanges = this.changeCategorySource.asObservable();

    private changeTodoSource = new BehaviorSubject({ operationType: '', data: new Todo });
    currentTodoChanges = this.changeTodoSource.asObservable();
   // private addCategoryButtonClick

    constructor() { }

    changeMessage(message: string) {
        this.messageSource.next(message);
    }

    changeCategory(category: Category) {
        this.categorySource.next(category);
    }

    sendError(errorMessage: ErrorMessage) {
        this.errorSource.next(errorMessage);
    }

    doCategoryChanges(changes: {operationType: string, data: Category}) {
        this.changeCategorySource.next(changes);
    }

    doTodoChanges(changes: { operationType: string, data: Todo }) {
        this.changeTodoSource.next(changes);
    }


}
