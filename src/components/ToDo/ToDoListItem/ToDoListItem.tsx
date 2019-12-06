import React from 'react';
import { ToDoListItemPropsInterface } from '../../../types/components/ToDo/ToDoListItem/types';

const ToDoListItem: React.FC<ToDoListItemPropsInterface> = props => {
  const clickHandler = () => {
    if (props.removeItem) {
      props.removeItem(props.id);
    }
  };
  const statusChangeHandler = () => {
    if (props.changeStatus) {
      props.changeStatus(props.id);
    }
  };
  return (
    <li className="todo__item" data-testid="todo-item">
      <span data-testid="todo__title" className="todo__title">
        {props.title}
      </span>
      <button
        className="todo__control"
        data-testid="delete-button"
        onClick={clickHandler}
      >
        Delete
      </button>
      <span className="todo__status" data-testid="todo__status">
        Status {props.status ? 'Active' : 'Complited'}
      </span>
      <button
        className="todo__control"
        data-testid="status-toggler"
        onClick={statusChangeHandler}
      >
        Change status
      </button>
    </li>
  );
};

export default ToDoListItem;
