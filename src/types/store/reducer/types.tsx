import { ToDoListItemPropsInterface } from '../../components/ToDo/ToDoListItem/types';
export interface StoreInterface {
  toDoItems: Array<ToDoListItemPropsInterface> | [];
  itemsToShowFlag: string;
}
