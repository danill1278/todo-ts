import React from 'react';
import ToDoControl from './ToDoControl/ToDoControl';
import { ToDoControlsInterface } from '../../../types/components/ToDo/ToDoControls/type';

const ToDoControls: React.FC<ToDoControlsInterface> = props => {
  return (
    <div className="todo__controls">
      <ToDoControl name="Show All" clickHandler={props.showAllItems} />
      <ToDoControl
        name="Show Completed"
        clickHandler={props.showComplitedItems}
      />
      <ToDoControl name="Show Active" clickHandler={props.showActiveItems} />
    </div>
  );
};

export default ToDoControls;
