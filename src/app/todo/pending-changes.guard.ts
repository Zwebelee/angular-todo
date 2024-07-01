import {CanDeactivateFn} from "@angular/router";
import {TodoAddComponent} from "./add/todo-add.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {inject} from "@angular/core";

export const pendingChangesGuard: CanDeactivateFn<TodoAddComponent> = (component) => {

  if (component.newTodoForm.dirty) {
    let snackbar = inject(MatSnackBar);
    snackbar.open(
      'You have unsaved changes. Save or delete them',
      undefined,
      {duration:2000}
      )
  }
  return !component.newTodoForm.dirty;
}
