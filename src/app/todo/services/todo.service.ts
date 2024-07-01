import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {TodoItem} from "../todo.types";
import {catchError, Observable, tap} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({providedIn: 'root'})
export class TodoService {
  public items: Array<TodoItem> = [];

  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar
  ) {
    this.load().subscribe(loaded => this.items = loaded);
  }

  load(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>('/assets/todos.json').pipe(
      tap(() => this.snackbar.open('Todo Items successfully loaded', undefined, {duration: 2000})),
      catchError(e => {
        this.snackbar.open('could not load todos', 'OK');
        return [];
      })
    )
  }

  public add(description: string) {
    this.items.push({
      id: this.items.length,
      description,
      checked: false
    });
  }
}
