export class Todo {
	id: number;
	todoText: string;
	isCompleted: boolean = false;
	constructor(id, todoText, isCompleted){
		this.id = id;
		this.todoText = todoText;
		this.isCompleted = isCompleted==null|| isCompleted==undefined?false:isCompleted;
	}
}