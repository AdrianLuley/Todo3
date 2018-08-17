import React, { Component } from 'react';
import {Route ,BrowserRouter, Switch} from 'react-router-dom';
import './index.css';
import ToDoList from './ToDoList';
import defaultTodos from './todos.json';




class App extends Component {
  state = {
		todos: defaultTodos
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
  
  deleteItem = id => evt => {
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
    const todos = this.state.todos;
    return (
      <div className="App">
      		<BrowserRouter>
					<Switch>
          <Route exact path='/' render={() => <ToDoList todos={todos} handleClick={this.handleClick} deleteItem={this.deleteItem} deleteAllItems={this.deleteAllItems}/>}/>
          <Route path='/active' render={() => <ToDoList todos={todos.filter(todo => !todo.completed)} handleClick={this.handleClick} deleteItem={this.deleteItem} deleteAllItems={this.deleteAllItems}/>}/>
          <Route path='/completed' render={() => <ToDoList todos={todos.filter(todo => todo.completed)} handleClick={this.handleClick} deleteItem={this.deleteItem} deleteAllItems={this.deleteAllItems}/>}/>
        </Switch>
				</BrowserRouter>
       
        </div>
    );
  }
}

export default App;
