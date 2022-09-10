import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo, TodoServices } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('todoTitleInp') todoTitleInp: ElementRef | any

  todoTitle = ''

  constructor(private todoService: TodoServices) { }


  todos: Todo[] = []

  ngOnInit() {
    this.fetchTodo()
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      this.todoTitleInp.nativeElement.focus()
      return
    }
    this.todoService.addTodo({
      title: this.todoTitle
    }).subscribe(response => {
      this.fetchTodo()
    });
    this.todoTitle = ''
  }
  fetchTodo() {
    this.todoService.getTodo()
      .subscribe(response => {
        this.todos = response
      })
  }
  completeTodo(todo: Todo) {
    const newTodo = {
      ...todo,
      completed: !todo.completed
    }
    this.todoService.completeTodo(todo,newTodo)
      .subscribe(response => {
        this.fetchTodo()
      });
  }
  deleteTodo(id: any) {
    this.todoService.deleteTodo(id)
      .subscribe(response => {
        this.fetchTodo()
      });
  }
}
