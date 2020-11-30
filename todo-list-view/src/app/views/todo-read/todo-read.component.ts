import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { TodoCreateDialogComponent } from '../todo-create-dialog/todo-create-dialog.component';
import { TodoDeleteDialogComponent } from '../todo-delete-dialog/todo-delete-dialog.component';
import { TodoUpdateDialogComponent } from '../todo-update-dialog/todo-update-dialog.component';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-read',
  templateUrl: './todo-read.component.html',
  styleUrls: ['./todo-read.component.css']
})
export class TodoReadComponent implements OnInit {

  todos: Todo[]
  todo: Todo
  displayedColumns = ['id', 'name', 'done', 'action']
  
  constructor(private route: ActivatedRoute, private todoService: TodoService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetch();
  }

  fetch(): void {
    this.todoService.read().subscribe(todos => {
      this.todos = todos;
    })
  }

  getById(id): void {
    this.todos.filter(todo => todo.id === id);
  } 

  openDialogCreate(): void {
    const dialogRef = this.dialog.open(TodoCreateDialogComponent, {
      width: '400px',
      height: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.fetch();
    });
  }


  openDialogDelete(): void {
    const dialogRef = this.dialog.open(TodoDeleteDialogComponent, {
      width: '400px',
      height: '300px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogEdit(): void {
    const dialogRef = this.dialog.open(TodoUpdateDialogComponent, {
      width: '400px',
      height: '300px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
