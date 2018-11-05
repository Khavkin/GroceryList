import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './custom-material.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environemnt

import { AppComponent } from './app.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { AddCategoryPanelComponent } from './add-category-panel/add-category-panel.component';
import { CategoryContainerComponent } from './category-container/category-container.component';
import { CategoriesReducer } from './store/reducers/categories.reducer';
import { TodosReducer } from './store/reducers/todos.reducer';
import { TodosContainerComponent } from './todos-container/todos-container.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddTodoPanelComponent } from './add-todo-panel/add-todo-panel.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { SharingDataService } from './sharing-data.service';
import { DataServiceModule } from './data-service.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    CategoryItemComponent,
    SearchPanelComponent,
    AddCategoryPanelComponent,
    CategoryContainerComponent,
    TodosContainerComponent,
    TodoItemComponent,
    AddTodoPanelComponent,
    TodosListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CustomMaterialModule,
    SharingDataService,
    StoreModule.forRoot({ categories: CategoriesReducer, todos: TodosReducer }),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    DataServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
