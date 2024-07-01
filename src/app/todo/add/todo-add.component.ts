import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators} from "@angular/forms";
import {TodoItem} from "../todo.types";

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

export class TodoAddComponent implements OnInit{
  @Output() added = new EventEmitter<TodoItem>();
  @Input({required: true}) nextId: number = 0;
  newTodoForm = new FormGroup({
    'description': new FormControl(null, [Validators.required])
  })
  constructor() {}

  ngOnInit() {}

  onAdd(myForm: FormGroupDirective) {
    if (this.newTodoForm.valid && this.newTodoForm.dirty) {
      this.added.emit({
        id: this.nextId,
        description: this.newTodoForm.value.description ?? '',
        checked: false,
      });
      myForm.resetForm();
    }
  }
}
