import React from "react";


class ToDoItem extends React.Component {
    render() {
        return(
            <div> 
               		<section className="todoapp">
			<header className="header">
				<h1>todos</h1>
				<input className="new-todo" placeholder="What needs to be done?" autoFocus/>
			</header>
            <section className="main">
				<ul className="todo-list">
			
			
					<li className="completed">
						<div className="view">
							<input className="toggle" type="checkbox" />
			
							<label>Taste JavaScript</label>
							<button className="destroy"></button>
						</div>
					</li>
					
					<li>
						<div className="view">
							<div>{this.props.data.title}</div>
							<input className="toggle" type="checkbox" />
							<label>Buy a unicorn</label>
							<button className="destroy"></button>
						</div>
					</li>
				</ul>
			</section>
			<footer className="footer">
			
				<span className="todo-count"><strong>0</strong> item(s) left</span>
			
				<button className="clear-completed">Clear completed</button>
			</footer>
		</section>
            </div>
        );
    }
}

export default ToDoItem;