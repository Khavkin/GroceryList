import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { Store } from '@ngrx/store';
import { AppStore } from '../store/models/app-store.interface';
import { CategoryList } from '../store/models/category.interface';
import { CategoryItemComponent } from '../category-item/category-item.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[];
  lastSelected: CategoryItemComponent = null;

  constructor( private store: Store<AppStore>) { }

  ngOnInit() {
    console.log('Category List component');
    this.getCategories();
  }

  getCategories(): void {
    this.store.select('categories')
      .subscribe(
        (value: CategoryList) => {
          this.categories = value.list;
          console.log(value);
        }
      );
  }

  onClick(selected): void {
    if (this.lastSelected !== selected) {
      if (this.lastSelected) {
        this.lastSelected.isSelected = false;
      }
      selected.isSelected = true;
      this.lastSelected = selected;
    }
    // console.log(cat);
  }
}
