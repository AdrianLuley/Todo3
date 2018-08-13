import React from "react";



class ToDoItem extends React.Component {
    render() {
        return(
					
					<li>
						<div className="view">
						{this.props.completed ? <input onClick = {this.props.handleClick} className="toggle" type="checkbox" checked />
						    : <input onClick = {this.props.handleClick} className="toggle" type="checkbox"  />}
							
							<label>{this.props.title}</label>
							
							<button className="destroy" onClick={this.props.deleteItem}></button>
						</div>
					</li>
        );
    }
}

export default ToDoItem;