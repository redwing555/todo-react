import React from 'react';
import TodoItem from './TodoItem';
/* eslint-disable  */

const TodosList = props => {
  
    return (
      <ul>
        {props.todos.map((todo) => (
          <TodoItem
           key={todo.id}
           todo={todo}
           handleChangeProps={props.handleChangeProps}
           deleteTodoProp={props.deleteTodoProps}
           setUpdate={props.setUpdate} />
        ))}
      </ul>

    );
  
  /* eslint-enable  */
};

export default TodosList;
