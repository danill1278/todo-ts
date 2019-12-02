import { ToDoListItemPropsInterface } from '../../components/ToDoListItem';
import {
  ADD_TODO_ITEM,
  REMOVE_TODO_ITEM,
  CHANGE_ITEM_STATUS,
  SHOW_ALL_ITEMS,
  SHOW_COMPLITED_ITEMS,
  SHOW_ACTIVE_ITEMS
} from '../actions/actions-constants';
import { ActionInterface } from '../actions/actionTypes';

export interface StoreInterface {
  toDoItems: Array<ToDoListItemPropsInterface> | [];
  itemsToShow: string;
}

const initialState = {
  toDoItems: [],
  itemsToShow: 'all'
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
        itemsToShow: 'all'
      };
    case SHOW_COMPLITED_ITEMS:
      return {
        ...state,
        itemsToShow: 'complited'
      };
    case SHOW_ACTIVE_ITEMS:
      return {
        ...state,
        itemsToShow: 'active'
      };
  }

  return state;
};
