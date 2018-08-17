import React from "react";

import ToDoItem from './ToDoItem';


class ToDoList extends React.Component {

		render() {
		
			return(
				<div> 
               		<section className="todoapp">
						<header className="header">
							<h1>todos</h1>
							<input id="text-input" className="new-todo" placeholder="What needs to be done?" autoFocus onKeyPress={this.props.addTodo}/>
						</header>
						<section className="main">
							<ul className="todo-list">
					{this.props.todos.map( todo => <ToDoItem key = {todo.id}  handleClick = {this.props.handleClick(todo.id)} title = {todo.title} 
					     completed = {todo.completed} deleteItem={this.props.deleteItem}/> )}
					</ul>
					</section>
			
					<footer className="footer">

			
					<span className="todo-count"><strong>{this.props.todos.length}</strong> item(s) left</span>
					<ul className="filters">
						<li>
							<a href="/">
							All
							</a>
						</li>
						<li>
							<a href="/active">
							Active
							</a>
						</li>
						<li>
							<a href="/completed">
							Completed
							</a>
						</li>
						</ul>
						
					<button className="clear-completed" onClick={this.props.deleteAllItems}>Clear Completed</button>
					</footer>
					</section>
				</div>
				
			);
		}
}

export default ToDoList;







