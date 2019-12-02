import React from 'react';
import { connect } from 'react-redux';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

import { ToDoListItemPropsInterface } from './ToDoListItem';
import { StoreInterface } from '../store/reducer/reducer';
import * as actionCreators from '../store/actions/actions';
import * as actionTypes from '../store/actions/actionTypes';

interface ToDoInterface {
  toDoItems: ToDoListItemPropsInterface[];
  itemsToShow: string;
  showAllItems?: actionTypes.ShowAllItems;
  showComplitedItems?: actionTypes.ShowComplitedItems;
  showActiveItems?: actionTypes.ShowActiveItems;
  removeItem?: actionTypes.RemoveItemType;
  changeStatus?: actionTypes.ChangeStatusType;
  addItem?: actionTypes.AddItemType;
}

const ConnectedToDo: React.FC<ToDoInterface> = props => {
  const showAllBtnClickHandler = () => {
    if (props.showAllItems) {
      props.showAllItems();
    }
  };

  const showComplitedBtnClickHandler = () => {
    if (props.showComplitedItems) {
      props.showComplitedItems();
    }
  };

  const showActiveBtnClickHandler = () => {
    if (props.showActiveItems) {
      props.showActiveItems();
    }
  };

  return (
    <div className="todo">
      <ToDoForm  addItem={props.addItem}/>
      Items type: {props.itemsToShow}
      <ToDoList
        removeItem={props.removeItem}
        itemsToShow={props.itemsToShow}
        changeStatus={props.changeStatus}
        items={props.toDoItems}
      />
      <div className="controls">
        <button onClick={showAllBtnClickHandler}>Show All</button>
        <button onClick={showComplitedBtnClickHandler}>Show Completed</button>
        <button onClick={showActiveBtnClickHandler}>Show Active</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: StoreInterface) => {
  const { toDoItems, itemsToShow } = state;
  return { toDoItems, itemsToShow };
};

const mapDispatchToProps = {
  showAllItems: actionCreators.showAllItems,
  showComplitedItems: actionCreators.showComplitedItems,
  showActiveItems: actionCreators.showActiveItems,
  removeItem: actionCreators.removeItem,
  changeStatus: actionCreators.changeStatus,
  addItem: actionCreators.addItem
};

const ToDo = connect(mapStateToProps, mapDispatchToProps)(ConnectedToDo);
export default ToDo;
