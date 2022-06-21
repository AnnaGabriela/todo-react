import { useState } from 'react';
import './TodoItem.css';

function TodoItem(props) {
	const [value, setValue] = useState(props.todo.text);
	const [isEditing, setIsEditing] = useState(false);

	function handleNewValue() {
		setIsEditing(false);
		props.onChangeTodo({ ...props.todo, text: value });
	}

	function handleChange(event) {
		setValue(event.target.value);
	}

	function handleKeyDown(e) {
		e.keyCode === 13 && handleNewValue();
	}

	const checkbox = (
		<input
			className="todo-checkbox"
			type="checkbox"
			checked={props.todo.done}
			onChange={() => props.onChangeTodo({ ...props.todo, done: !props.todo.done })}
		/>
	)

	const label = (<label className={`todo-label ${props.todo.done ? "todo-label-done" : ''}`}>{props.todo.text}</label>);

	const input = (<input
		className="todo-input"
		value={value}
		onChange={handleChange}
		onBlur={handleNewValue}
		onKeyDown={handleKeyDown}
		autoFocus={true}
	/>)

	const deleteBtn = (<button className="todo-delete-btn" onClick={() => props.onDeleteTodo(props.todo.id)}>X</button>)

	return (
		<div className="todo-item" onDoubleClick={() => { setIsEditing(true) }}>
			<div className="todo-content">
				{checkbox}
				{!isEditing ? label : input}
			</div>
			{deleteBtn}
		</div>
	);
}

export default TodoItem;
