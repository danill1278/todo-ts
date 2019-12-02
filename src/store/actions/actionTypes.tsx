import {
  ADD_TODO_ITEM,
  REMOVE_TODO_ITEM,
  CHANGE_ITEM_STATUS,
  SHOW_ALL_ITEMS,
  SHOW_COMPLITED_ITEMS,
  SHOW_ACTIVE_ITEMS
} from './actionsConstants';
import { ToDoListItemPropsInterface } from '../../components/ToDoListItem';

export interface AddItemActionInterface {
  type: typeof ADD_TODO_ITEM;
  payload: ToDoListItemPropsInterface;
}

export interface RemoveItemActionInterface {
  type: typeof REMOVE_TODO_ITEM;
  payload: number;
}

export interface ChangeStatusActionInterface {
  type: typeof CHANGE_ITEM_STATUS;
  payload: number;
}

export interface ShowAllActionInterface {
  type: typeof SHOW_ALL_ITEMS;
}

export interface ShowComlitedActionInterface {
  type: typeof SHOW_COMPLITED_ITEMS;
}

export interface ShowActiveActionInterface {
  type: typeof SHOW_ACTIVE_ITEMS;
}

export type ActionInterface =
  | AddItemActionInterface
  | RemoveItemActionInterface
  | ChangeStatusActionInterface
  | ShowActiveActionInterface
  | ShowAllActionInterface
  | ShowComlitedActionInterface;

export type ShowAllItems = () => {};
export type ShowComplitedItems = () => {};
export type ShowActiveItems = () => {};
export type AddItemType = (prop: ToDoListItemPropsInterface) => {};
export type RemoveItemType = (id: number) => {};
export type ChangeStatusType = (id: number) => {};
