import {Component} from '@angular/core';
import {TodoItem} from "./todo.types";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {CommonModule} from "@angular/common";
import {TodosPipe} from "./todo.pipes";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  standalone: true,
  imports: [MatCardModule, MatListModule, CommonModule, TodosPipe],
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent {
  todoItems: TodoItem[] = [
    {id: 1, description: 'Buy milk', checked: false},
    {id: 2, description: 'Clean the house', checked: true},
    {id: 3, description: 'Go to the gym', checked: true},
    {id: 4, description: 'Call mom', checked: false},
    {id: 5, description: 'Read a book', checked: false},
    {id: 6, description: 'Cook dinner', checked: true},
    {id: 7, description: 'Walk the dog', checked: false},
  ]
}
