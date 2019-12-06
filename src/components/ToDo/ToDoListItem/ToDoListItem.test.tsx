import React from 'react';
import ToDoListItem from './ToDoListItem';
//testing tools
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
//tools for redux in testings
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as actionCreators from '../../../store/actions/actions';

describe('Todo list items test:', () => {
  const mockStore = configureStore([]);
  let store: any;
  let component: any;
  beforeEach(() => {
    store = mockStore({
      toDoItems: [
        {
          title: 'Do homerwork',
          id: 1,
          status: true
        }
      ],
      itemsToShow: 'all'
    });
  });

  afterEach(() => {
    store.clearActions();
  });

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <ToDoListItem
          title={store.getState().toDoItems[0].title}
          id={store.getState().toDoItems[0].id}
          status={store.getState().toDoItems[0].status}
          changeStatus={(id: number) =>
            store.dispatch(actionCreators.changeStatus(id))
          }
          removeItem={(id: number) =>
            store.dispatch(actionCreators.removeItem(id))
          }
        />
      </Provider>
    );
  });

  it('To Do item status check', () => {
    const toDoListItemStatus = component.getByTestId('todo__status');
    expect(toDoListItemStatus).toHaveTextContent('Status Active');

    store = mockStore({
      toDoItems: [
        {
          title: 'Do homerwork',
          id: 1,
          status: false
        }
      ],
      itemsToShow: 'all'
    });

    component.rerender(
      <ToDoListItem
        title={store.getState().toDoItems[0].title}
        id={store.getState().toDoItems[0].id}
        status={store.getState().toDoItems[0].status}
        changeStatus={(id: number) =>
          store.dispatch(actionCreators.changeStatus(id))
        }
        removeItem={(id: number) =>
          store.dispatch(actionCreators.removeItem(id))
        }
      />
    );
    expect(component.getByTestId('todo__status')).toHaveTextContent(
      'Status Complited'
    );

    fireEvent(
      component.getByTestId('status-toggler'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    );

    const actions = store.getActions();
    const expectedPayload = {
      payload: store.getState().toDoItems[0].id,
      type: 'CHANGE_ITEM_STATUS'
    };
    expect(actions).toEqual([expectedPayload]);
  });

  it('To do item name check', () => {
    const toDoListItemTitle = component.getByTestId('todo__title');
    expect(toDoListItemTitle).toHaveTextContent(
      store.getState().toDoItems[0].title
    );
  });

  it('To do item delete functionality check', () => {
    fireEvent(
      component.getByTestId('delete-button'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    );

    const actions = store.getActions();

    const expectedPayload = {
      payload: store.getState().toDoItems[0].id,
      type: 'REMOVE_TODO_ITEM'
    };
    expect(actions).toEqual([expectedPayload]);
  });
});
