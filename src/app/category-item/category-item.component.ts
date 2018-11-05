import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../category';
import { SharingDataService } from '../sharing-data.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  isReadonly = 'true';
  isSelected = false;
  editCategory: Category;

  @Input()
  category: Category;

  constructor(private sharingDataService: SharingDataService) { }

  ngOnInit() {
    this.editCategory = this.category;
  }

  onClick() {
    this.sharingDataService.changeCategory(this.category);
    // this.isSelected = !this.isSelected;
  }

  onDblClick() {
    this.changeReadonly();
  }

  onSubmit(value: string) {
    // sharingDataService
    this.category = this.editCategory;

    this.changeReadonly();
  }

  onCancel() {
    this.editCategory = this.category;
    this.changeReadonly();
  }



  private changeReadonly(): void {
    if (this.isReadonly === 'true') {
      this.isReadonly = 'false';
    } else {
      this.isReadonly = 'true';
    }
  console.log('isReadonly = ', this.isReadonly );

  }
}
