import React from 'react';
import ToDoListItem from '../ToDoListItem/ToDoListItem';
import { ToDoListPropInterface } from '../../../types/components/ToDo/ToDoList/types';

const ToDoList: React.FC<ToDoListPropInterface> = props => {
  const itemsCoponents = props.items.filter(el => {
    if (props.itemsToShowFlag === 'all') {
      return true;
    } else if (props.itemsToShowFlag === 'complited' && !el.status) {
      return true;
    } else if (props.itemsToShowFlag === 'active' && el.status) {
      return true;
    }

    return false;
  });

  return (
    <ul className="todo__items-list">
      {itemsCoponents.map(item => {
        return (
          <ToDoListItem
            key={item.id}
            title={item.title}
            id={item.id}
            status={item.status}
            removeItem={props.removeItem}
            changeStatus={props.changeStatus}
          />
        );
      })}
    </ul>
  );
};

export default ToDoList;
