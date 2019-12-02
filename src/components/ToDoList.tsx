import React from 'react';
import ToDoListItem, { ToDoListItemPropsInterface } from './ToDoListItem';
import * as actionTypes from '../store/actions/actionTypes';

export interface ToDoListPropInterface {
  items: ToDoListItemPropsInterface[];
  itemsToShow: string;
  removeItem?: actionTypes.RemoveItemType;
  changeStatus?: actionTypes.ChangeStatusType;
}

const ToDoList: React.FC<ToDoListPropInterface> = props => {
  let listItems: ToDoListItemPropsInterface[] = [];

  props.items.forEach(el => {
    if (props.itemsToShow === 'all') {
      listItems.push(el);
    } else if (props.itemsToShow === 'complited' && !el.status) {
      listItems.push(el);
    } else if (props.itemsToShow === 'active' && el.status) {
      listItems.push(el);
    }
  });

  return (
    <ul>
      {listItems.map(item => {
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
