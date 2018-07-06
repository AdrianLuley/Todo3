import React from "react";
import ToDoItem from './ToDoItem';
import todoList from './todos.json';

class ToDoList extends React.Component {
   state = {
		todos: todoList
   }
		render() {
			return(
				<div> 
					
					{this.state.todos.map( todo => <ToDoItem data = {todo}/> )}

				</div>
			);
		}
}

export default ToDoList;






