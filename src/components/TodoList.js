import { useReducer, useState } from 'react';
import todosReducer from '../store/todoReducer';
import { initialTodos } from '../data/todos';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList(props) {
  const [newItem, setNewItem] = useState('');
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  function onAddTodo() {
    dispatch({
      type: 'added',
      todo: { text: newItem, categoryId: props.categoryId }
    });
  }

  function onChangeTodo(todo) {
    dispatch({
      type: 'changed',
      todo: todo
    });
  }

  function onDeleteTodo(todoId) {
    dispatch({
      type: 'deleted',
      id: todoId
    });
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13 && newItem !== '') {
      onAddTodo();
      setNewItem('');
    }
  }

  const newItemInput =
    (<div className="new-item">
      <input
        type="text"
        value={newItem}
        placeholder="+ Digite uma nova tarefa"
        onChange={(e) => setNewItem(e.target.value)}
        onKeyDown={handleKeyDown}
        className="new-item-input" />
    </div>);

  return (
    <div className="todo-list">
      {newItemInput}
      {todos.filter(t => t.category_id === props.categoryId).map((todo) => {
        return <TodoItem
          todo={todo} key={todo.id}
          onChangeTodo={onChangeTodo}
          onDeleteTodo={onDeleteTodo} />
      })}
    </div>)
}

export default TodoList;
