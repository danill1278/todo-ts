import React from 'react';
import ToDoForm from './ToDoForm/ToDoForm';
import ToDoList from './ToDoList/ToDoList';
import ToDoControls from './ToDoControls/ToDoControls';

import { connect } from 'react-redux';
import { StoreInterface } from '../../types/store/reducer/types';
import * as actionCreators from '../../store/actions/actions';

import { ToDoInterface } from '../../types/components/ToDo/types';

const ConnectedToDo: React.FC<ToDoInterface> = props => {
  return (
    <div className="todo">
      <ToDoForm addItem={props.addItem} />
      Items type: {props.itemsToShowFlag}
      <ToDoList
        items={props.items}
        removeItem={props.removeItem}
        changeStatus={props.changeStatus}
        itemsToShowFlag={props.itemsToShowFlag}
      />
      <ToDoControls
        showAllItems={props.showAllItems}
        showComplitedItems={props.showComplitedItems}
        showActiveItems={props.showActiveItems}
      />
    </div>
  );
};

const mapStateToProps = (state: StoreInterface) => {
  const { toDoItems: items, itemsToShowFlag } = state;
  return { items, itemsToShowFlag };
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
