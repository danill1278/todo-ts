import { RemoveItemType, ChangeStatusType } from '../../../store/actions/types';

export interface ToDoListItemPropsInterface {
  title: string;
  id: number;
  status: boolean;
  removeItem?: RemoveItemType;
  changeStatus?: ChangeStatusType;
}
