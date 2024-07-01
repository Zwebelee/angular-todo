import {Pipe, PipeTransform} from "@angular/core";
import {TodoItem} from "./todo.types";

@Pipe({
  name: 'todos',
  standalone: true,
  pure: false
  })

export class TodosPipe implements PipeTransform{
  transform(items: TodoItem[], done: boolean) {
    return items ? items.filter(item=>item.checked === done) : items;
  }
}
