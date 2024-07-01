import {Component, OnInit} from '@angular/core';
import {TodoItem} from "./todo.types";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {CommonModule} from "@angular/common";
import {TodosPipe} from "./todo.pipes";
import {MatCheckbox} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {TodoAddComponent} from "./add/todo-add.component";
import {TodoService} from "./services/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  standalone: true,
  imports: [MatCardModule,
    MatListModule,
    CommonModule,
    TodosPipe,
    MatCheckbox,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    TodoAddComponent],
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
  items: TodoItem[]=[]
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.load().subscribe((todos)=> {
      this.items = todos;
    })
  }

  onAdd(newItem: TodoItem) {
    this.items.push(newItem);
  }
}
