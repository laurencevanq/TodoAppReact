//Action constants

export const DELETE_TASK = 'DELETE_TASK' ;
export const ADD_TASK = 'ADD_TASK' ;
export const CHECK_TASK = 'CHECK_TASK' ;

//Counter

let todoId = 0;

//Actions constructors

export function addNewTask(task){
	return({
		type: ADD_TASK,
		id: todoId++,
		task
	});
};

export function deleteTask(id){
	return({
		type: DELETE_TASK,
		id
	});
};

export function checkTask(id){
	return({
		type: CHECK_TASK,
		id
	});
};