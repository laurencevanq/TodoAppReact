import {CHECK_TASK, DELETE_TASK, ADD_TASK} from 'todoActions.jsx';

import {combineReducers} from 'redux';

/*
STATE FORM:
{	
	todos[...{
				id: 0,
				task: "",
				isDone: false,
			}
	]
}


*/

function task(state = {} , action){
	switch(action.type){
		case ADD_TASK:
			return(
				Object.assign({}, state, { 	id:action.id, 
											task:action.task, 
											isDone:false })
			);
		case CHECK_TASK:
			return(
				if(state.id!=action.id){
					return state
				}
				Object.assign({}, state , {isDone: !state.isDone})
			);
		default:
			return state; 
	}
}

function taskList(state=[] , action){
	switch(action.type){
		case ADD_TASK:
			return([...state, task({}, action)]);
		case CHECK_TASK:
			return(
				state.map(m=>task(m.action));
			)
		case DELETE_TASK:
			return(	[...state.slice(0,action.id), 
					 ...state.slice(action.id+1,state.length)
					]
			)
		default:
			return state;
	}
}

export default const reducer = combineReducers({task, taskList});