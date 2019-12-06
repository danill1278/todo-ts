import { ToDoListItemPropsInterface } from '../../types/components/ToDo/ToDoListItem/types';
import {
  ADD_TODO_ITEM,
  REMOVE_TODO_ITEM,
  CHANGE_ITEM_STATUS,
  SHOW_ALL_ITEMS,
  SHOW_COMPLITED_ITEMS,
  SHOW_ACTIVE_ITEMS
} from './actionsConstants';
import * as actionsTypes from '../../types/store/actions/types';

export const addItem: actionsTypes.AddItemType = (
  prop: ToDoListItemPropsInterface
) => {
  return {
    type: ADD_TODO_ITEM,
    payload: prop
  };
};

export const removeItem: actionsTypes.RemoveItemType = (id: number) => {
  return {
    type: REMOVE_TODO_ITEM,
    payload: id
  };
};

export const changeStatus: actionsTypes.ChangeStatusType = (id: number) => {
  return {
    type: CHANGE_ITEM_STATUS,
    payload: id
  };
};

export const showAllItems: actionsTypes.ShowAllItems = () => {
  return {
    type: SHOW_ALL_ITEMS
  };
};

export const showComplitedItems: actionsTypes.ShowComplitedItems = () => {
  return {
    type: SHOW_COMPLITED_ITEMS
  };
};

export const showActiveItems: actionsTypes.ShowActiveItems = () => {
  return {
    type: SHOW_ACTIVE_ITEMS
  };
};
