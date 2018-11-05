import { Component, OnInit } from '@angular/core';
import { SharingDataService } from '../sharing-data.service';
import { Category } from '../category';

@Component({
  selector: 'app-todos-container',
  templateUrl: './todos-container.component.html',
  styleUrls: ['./todos-container.component.css']
})
export class TodosContainerComponent implements OnInit {

  category: Category;

  constructor(private sharingDataService: SharingDataService) { }

  ngOnInit() {
    this.sharingDataService.currentCategory.subscribe(category => {
      this.category = category;
      console.log('todos-container change category:', category);
    });
  }

}
