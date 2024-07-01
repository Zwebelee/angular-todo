import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {TodoItem} from "../todo.types";
import {catchError, Observable, tap} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({providedIn: 'root'})
export class TodoService {
  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar
  ) {}

  load(): Observable<TodoItem[]>{
    return this.http.get<TodoItem[]>('/assets/todos.json').pipe(
      tap(() => this.snackbar.open('Todo Items successfully loaded')),
      catchError(e => {
        this.snackbar.open('could not load todos', 'OK');
        return [];
      })

  )
  }
}
