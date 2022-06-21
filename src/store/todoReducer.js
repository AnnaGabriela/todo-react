export default function todosReducer(todos, action) {
  switch (action.type) {
    case 'added': {
      return [{
        id: todos.length + 1,
        text: action.todo.text,
        done: false,
        category_id: action.todo.categoryId
      }, ...todos];
    }
    case 'changed': {
      return todos.map(t => {
        if (t.id === action.todo.id) {
          return action.todo;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return todos.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
