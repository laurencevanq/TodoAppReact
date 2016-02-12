import React from 'react';
import Reflux from 'reflux';

import {TodoStore} from './todoStore.jsx';

class TextBox extends React.Component{		
	render(){
		return (
			<input type="text" placeholder="I need to..." autoFocus />
		)
	}
};


class EraseButton extends React.Component{	
	render(){
		return(
			<button >x</button>
		)
	}
};


class CheckBox extends React.Component{		
	render(){
		return ( 
			<input type="checkbox" />
		)
	}
};

class TaskList extends React.Component{		

	render(){
		return(	<li>
					<form>
						<CheckBox />
						<EraseButton/>
					</form>
				</li>
		)
	}
};

export class TodoApp extends React.Component{		
	
	render(){
		return(<div><header>
						<h1>Todo List</h1>
					</header>
					<form>
						<TextBox className="textBox" />
					</form>
					<ul>
						<TaskList className="taskList" />
					</ul>
				</div>
		)
	}
};

React.render(<TodoApp/>, document.getElementById('todoApp'));