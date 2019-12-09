import * as actionTypes from '../../../../types/store/actions/types';
import { ToDoListItemPropsInterface } from '../ToDoListItem/types';

export interface ToDoListPropInterface {
  items: ToDoListItemPropsInterface[];
  removeItem: actionTypes.RemoveItemType;
  changeStatus: actionTypes.ChangeStatusType;
  itemsToShowFlag: string;
}
