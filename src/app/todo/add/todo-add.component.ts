import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators} from "@angular/forms";
import {TodoItem} from "../todo.types";
import {TodoService} from "../services/todo.service";

@Component({
  selector: 'todo-add',
  templateUrl: './todo-add.component.html',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  styleUrls: ['./todo-add.component.scss']
})

export class TodoAddComponent{
  newTodoForm = new FormGroup({
    'description': new FormControl(null, [Validators.required])
  })
  constructor(private todoService:TodoService) {}


  onAdd(myForm: FormGroupDirective) {
    if (this.newTodoForm.valid && this.newTodoForm.dirty) {
      this.todoService.add(this.newTodoForm.value.description ?? '');
      myForm.resetForm();
    }
  }
}
