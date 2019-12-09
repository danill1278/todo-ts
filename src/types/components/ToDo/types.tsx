import { ToDoListItemPropsInterface } from './ToDoListItem/types';
import * as actionTypes from '../../store/actions/types';

export interface ToDoInterface {
  items: ToDoListItemPropsInterface[];
  showAllItems: actionTypes.ShowAllItems;
  showComplitedItems: actionTypes.ShowComplitedItems;
  showActiveItems: actionTypes.ShowActiveItems;
  removeItem: actionTypes.RemoveItemType;
  changeStatus: actionTypes.ChangeStatusType;
  addItem: actionTypes.AddItemType;
  itemsToShowFlag: string;
}
