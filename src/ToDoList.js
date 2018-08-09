import React from "react";
import ToDoItem from './ToDoItem';
import todos from './todos.json';

class ToDoList extends React.Component {
   state = {
		todos: todos
   }
   handleClick = (id) => () => {
	   const todos = this.state.todos
		for(let i=0; i < todos.length; i++) {
		if (todos[i].id === id) {
			todos[i].completed = !todos[i].completed 
		} 
		}
   }
   addTodo = (e) => {
    const { todos } = this.state;
    const title = document.getElementById("text-input").value;
    if(e.key === "Enter") {
      this.setState({todos: [...todos, {
        "userId": 1,
        "id": todos[todos.length -1].id + 1,
        "title": title,
        "completed": false
      }]});
      document.getElementById("text-input").value = ""
    }
  }
  
  deleteItem = id => () => {
    const { todos } = this.state;
    
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }
  
  deleteAllItems = () => {
    const { todos } = this.state;
    this.setState({todos: todos.filter(todo => !todo.completed)})
  }
		render() {
		
			return(
				<div> 
               		<section className="todoapp">
						<header className="header">
							<h1>todos</h1>
							<input id="text-input" className="new-todo" placeholder="What needs to be done?" autoFocus onKeyPress={this.addTodo}/>
						</header>
						<section className="main">
							<ul className="todo-list">
					{this.state.todos.map( todo => <ToDoItem key = {todo.id}  handleClick = {this.handleClick(todo.id)} title = {todo.title} 
					     completed = {todo.completed} deleteItem={this.props.deleteItem}/> )}
					</ul>
					</section>
					<footer className="footer">

			
					<span className="todo-count"><strong>{this.state.todos.length}</strong> item(s) left</span>
		
					<button className="clear-completed" onClick={this.deleteAllItems}>Clear Completed</button>
					</footer>
					</section>
				</div>
				
			);
		}
}

export default ToDoList;







