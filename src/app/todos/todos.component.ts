import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
	
	myTodos: Todo[] = [];
	constructor() { }
	ngOnInit() {
		this.preLoadTodos();
  }
  preLoadTodos(){
	  this.myTodos.push(new Todo(0,"get milk", true));
	  this.myTodos.push(new Todo(1,"feed the cat", false));
  };
  
  addTodo(){
	  this.myTodos.push(new Todo(this.myTodos.length,"", false));
  };
  
  deleteTodo(todo){
	  let index = this.myTodos.map(function(e){
		  return e.id;
	  }).indexOf(todo.id);
	  this.myTodos.splice(index,1);
  };
  
  completeTodo(todo){
	  todo.isCompleted = !todo.isCompleted;
  };
}
