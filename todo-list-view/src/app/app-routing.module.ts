import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { TodoCreateDialogComponent } from './views/todo-create-dialog/todo-create-dialog.component';
import { TodoDeleteDialogComponent } from './views/todo-delete-dialog/todo-delete-dialog.component';
import { TodoReadComponent } from './views/todo-read/todo-read.component';
import { TodoUpdateDialogComponent } from './views/todo-update-dialog/todo-update-dialog.component';




const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "todos",
    component: TodoReadComponent
  },
  {
    path: "todos/create",
    component: TodoCreateDialogComponent
  },
  {
    path: "todos/update/:id",
    component: TodoUpdateDialogComponent
  },
  {
    path: "todos/delete/:id",
    component: TodoDeleteDialogComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

