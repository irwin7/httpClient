import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Todo {
  completed: boolean
  title: string
  id?: number
}


@Injectable({ providedIn: 'root' })
export class TodoServices {
  constructor(private http: HttpClient) { }

  addTodo(newTodo:object) {
      return this.http.post<Todo>('https://x8ki-letl-twmt.n7.xano.io/api:0UVe0H9U/todo_ng', newTodo)
  }
  getTodo(): Observable<Todo[]>{
      return this.http.get<Todo[]>('https://x8ki-letl-twmt.n7.xano.io/api:0UVe0H9U/todo_ng')
  }
  completeTodo(todo:any,newTodo:object){
      return this.http.post<Todo>(`https://x8ki-letl-twmt.n7.xano.io/api:0UVe0H9U/todo_ng/${todo.id}`, newTodo)
  }
  deleteTodo(id:number){
      return this.http.delete<Todo>(`https://x8ki-letl-twmt.n7.xano.io/api:0UVe0H9U/todo_ng/delete/${id}`,)
  }
}