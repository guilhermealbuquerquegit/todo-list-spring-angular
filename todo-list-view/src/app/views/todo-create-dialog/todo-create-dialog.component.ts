import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Todo } from '../todo-read/todo.model';
import { TodoService } from '../todo-read/todo.service';

@Component({
  selector: 'app-todo-create-dialog',
  templateUrl: './todo-create-dialog.component.html',
  styleUrls: ['./todo-create-dialog.component.css']
})
export class TodoCreateDialogComponent implements OnInit {

  todo: Todo = {
    nome: '',
    done: false
  }

  constructor(public dialogRef: MatDialogRef<TodoCreateDialogComponent>,
    private todoService: TodoService) { }

  ngOnInit(): void {
  }

  createTodo(): void {
    this.todoService.create(this.todo).subscribe(() => {
      this.todoService.showMessage('Todo criado!')
      this.cancel()
    })
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
