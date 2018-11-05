import { Component, OnInit } from '@angular/core';
import { SharingDataService } from '../sharing-data.service';

@Component({
  selector: 'app-add-todo-panel',
  templateUrl: './add-todo-panel.component.html',
  styleUrls: ['./add-todo-panel.component.css']
})
export class AddTodoPanelComponent implements OnInit {

  categoryName: string;

  constructor(private sharingDS: SharingDataService ) { }

  ngOnInit() {
    this.sharingDS.currentCategory.subscribe(category => this.categoryName = category.name);
  }

}
