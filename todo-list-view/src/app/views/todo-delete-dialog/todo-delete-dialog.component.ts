import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Todo } from '../todo-read/todo.model';
import { TodoService } from '../todo-read/todo.service';


@Component({
  selector: 'app-todo-delete-dialog',
  templateUrl: './todo-delete-dialog.component.html',
  styleUrls: ['./todo-delete-dialog.component.css']
})
export class TodoDeleteDialogComponent implements OnInit {

  todo: Todo;
  
  constructor(public dialogRef: MatDialogRef<TodoDeleteDialogComponent>,
    private todoService: TodoService) { }

  ngOnInit(): void {
  }                 

  deleteTodo(): void {
    this.todoService.delete(this.todo.id).subscribe(() => {
      this.todoService.showMessage("ToDo excluido com sucesso!");
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
