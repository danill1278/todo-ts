import { ToDoListItemPropsInterface } from '../../types/components/ToDo/ToDoListItem/types';
import {
  ADD_TODO_ITEM,
  REMOVE_TODO_ITEM,
  CHANGE_ITEM_STATUS,
  SHOW_ALL_ITEMS,
  SHOW_COMPLITED_ITEMS,
  SHOW_ACTIVE_ITEMS
} from '../actions/actionsConstants';
import { ActionInterface } from '../../types/store/actions/types';
import { StoreInterface } from '../../types/store/reducer/types';

export const initialState = {
  toDoItems: [],
  itemsToShowFlag: 'all'
};

export const reducer = (
  state: StoreInterface = initialState,
  action: ActionInterface
): StoreInterface => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return {
        ...state,
        toDoItems: [
          ...state.toDoItems,
          {
            id: action.payload.id,
            title: action.payload.title,
            status: action.payload.status
          }
        ]
      };
    case REMOVE_TODO_ITEM:
      return {
        ...state,
        toDoItems: state.toDoItems.filter(item => {
          return item.id !== action.payload;
        })
      };
    case CHANGE_ITEM_STATUS:
      return {
        ...state,
        toDoItems: [...state.toDoItems].map(
          (item: ToDoListItemPropsInterface) => {
            if (action.payload === item.id) {
              item.status = !item.status;
            }
            return item;
          }
        )
      };
    case SHOW_ALL_ITEMS:
      return {
        ...state,
        itemsToShowFlag: 'all'
      };
    case SHOW_COMPLITED_ITEMS:
      return {
        ...state,
        itemsToShowFlag: 'complited'
      };
    case SHOW_ACTIVE_ITEMS:
      return {
        ...state,
        itemsToShowFlag: 'active'
      };
    default:
      return state;
  }
};
