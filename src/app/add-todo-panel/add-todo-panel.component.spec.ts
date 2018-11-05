import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoPanelComponent } from './add-todo-panel.component';

describe('AddTodoPanelComponent', () => {
  let component: AddTodoPanelComponent;
  let fixture: ComponentFixture<AddTodoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTodoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
