import React from 'react';

class CheckBox extends React.Component{

}

class EraseButton extends React.Component{

}

class TaskList extends React.Component{
	
}

class TaskInput extends React.Component{
	<form>
		<input type="text" placeholder="I need to...">
	</form>
}


class TodoApp extends React.Component{
	render(){
		return {
			<h1>{this.props.name}</h1>
			<TaskInput/>
			<TaskList/>
		}
	}
}

React.render(<TodoApp name="Todo List!"/>, document.getElementById("todoApp"));