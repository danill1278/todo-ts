import React from 'react';
import { ToDoControlInterface } from '../../../../types/components/ToDo/ToDoControls/ToDoControl/types';

const ToDoControl: React.FC<ToDoControlInterface> = props => {
  const clickHandler = () => {
    if (props.id) {
      props.clickHandler(props.id);
    } else {
      props.clickHandler();
    }
  };
  return (
    <button
      className="todo__control"
      data-testid="todo-control"
      onClick={() => {
        clickHandler();
      }}
    >
      {props.name}
    </button>
  );
};

export default ToDoControl;
