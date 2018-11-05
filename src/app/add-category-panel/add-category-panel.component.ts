import { Component, OnInit } from '@angular/core';
import { SharingDataService } from '../sharing-data.service';
import { categoryActionTypes } from '../store/constants/category.constants';
import { Category } from '../category';


@Component({
  selector: 'app-add-category-panel',
  templateUrl: './add-category-panel.component.html',
  styleUrls: ['./add-category-panel.component.css']
})
export class AddCategoryPanelComponent implements OnInit {

  constructor(private sharingDS: SharingDataService ) { }

  ngOnInit() {
  }

  onEnter(value: any) {
    const data: Category = new Category;
    data.name = value.value;
    value.value = '';
    console.log(value);
    // value.value = '';

    this.sharingDS.doCategoryChanges({ operationType: 'ADD', data});
  }
}
