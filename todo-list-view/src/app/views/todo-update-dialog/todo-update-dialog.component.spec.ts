import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoUpdateDialogComponent } from './todo-update-dialog.component';

describe('TodoUpdateDialogComponent', () => {
  let component: TodoUpdateDialogComponent;
  let fixture: ComponentFixture<TodoUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoUpdateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
