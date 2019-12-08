import React from 'react';
import ToDoList from './ToDoList';
//testing tools
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as actionCreators from '../../../store/actions/actions';

describe('Todo list test:', () => {
  let store: any;
  beforeEach(() => {
    store = {
      toDoItems: [
        {
          title: 'Do homerwork',
          id: 1,
          status: false
        },
        {
          title: 'Do homerwork',
          id: 2,
          status: true
        },
        {
          title: 'Do homerwork',
          id: 3,
          status: true
        },
        {
          title: 'Do homerwork',
          id: 4,
          status: true
        }
      ],
      itemsToShowFlag: 'all'
    };
  });

  const checkListCountMatching = (itemStatus: boolean) => {
    // count active items
    let storeItemsLength: number = 0;
    let DOMItemsLength: number = 0;
    store.toDoItems.forEach((item: any) => {
      if (item.status === itemStatus) {
        ++storeItemsLength;
      }
    });

    const { getAllByTestId } = render(
      <ToDoList
        itemsToShowFlag={store.itemsToShowFlag}
        removeItem={actionCreators.removeItem}
        changeStatus={actionCreators.changeStatus}
        items={store.toDoItems}
      />
    );

    const listItems = getAllByTestId('todo-item');
    let statusText: string = itemStatus ? 'Status Active' : 'Status Complited';

    listItems.forEach(el => {
      const elStatusHodlerNode: any = el.querySelector('.todo__status');
      if (elStatusHodlerNode && elStatusHodlerNode.innerHTML === statusText) {
        DOMItemsLength++;
      }
    });

    return {
      expect: storeItemsLength,
      receive: DOMItemsLength
    };
  };

  it('To Do List all items render check', () => {
    const { getAllByTestId } = render(
      <ToDoList
        itemsToShowFlag={store.itemsToShowFlag}
        removeItem={actionCreators.removeItem}
        changeStatus={actionCreators.changeStatus}
        items={store.toDoItems}
      />
    );

    let listItems = getAllByTestId('todo-item');
    expect(listItems.length).toBe(store.toDoItems.length);
  });

  it('To Do List active items render check', () => {
    let result = checkListCountMatching(true);
    expect(result.expect).toBe(result.receive);
  });
  it('To Do List complited items render check', () => {
    let result = checkListCountMatching(false);
    expect(result.expect).toBe(result.receive);
  });
});
