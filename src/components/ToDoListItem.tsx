import React from 'react';
import { RemoveItemType, ChangeStatusType } from '../store/actions/actionTypes';

export interface ToDoListItemPropsInterface {
  title: string;
  id: number;
  status: boolean;
  removeItem?: RemoveItemType;
  changeStatus?: ChangeStatusType;
}

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
    <li>
      <div>
        {props.title}
        <button onClick={clickHandler}>Delete</button>
        <span>Status {props.status ? 'Active' : 'Complited'}</span>
        <button onClick={statusChangeHandler}>Change status</button>
      </div>
    </li>
  );
};

export default ToDoListItem;
