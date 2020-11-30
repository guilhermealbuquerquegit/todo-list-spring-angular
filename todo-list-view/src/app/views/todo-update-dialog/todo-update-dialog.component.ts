import { Todo } from './../todo-read/todo.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo-read/todo.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-update-dialog',
  templateUrl: './todo-update-dialog.component.html',
  styleUrls: ['./todo-update-dialog.component.css']
})
export class TodoUpdateDialogComponent implements OnInit {

  todo: Todo;

  constructor(private todoService: TodoService,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<TodoUpdateDialogComponent>) { }

  ngOnInit(): void {
  }

  updateTodo(): void {
    this.todoService.update(this.todo).subscribe(() => {
      this.todoService.showMessage("ToDo atualizado com sucesso!");
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
