import React from 'react';
import ToDoControl from './ToDoControl';
//testing tools
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
//tools for redux in testings
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as actionCreators from '../../../../store/actions/actions';

describe('Todo list items test:', () => {
  const mockStore = configureStore([]);
  let store: any;
  let component: any;
  let controlName: string = 'Delete';
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
        <ToDoControl
          name={controlName}
          id={store.getState().toDoItems[0].id}
          clickHandler={(id: number) =>
            store.dispatch(actionCreators.removeItem(id))
          }
        />
      </Provider>
    );
  });

  it("Check setuping control's name from props ", () => {
    expect(component.getByTestId('todo-control')).toHaveTextContent(
      controlName
    );
  });

  it('Check control element click functionaluty', () => {
    fireEvent(
      component.getByTestId('todo-control'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    );

    const actions = store.getActions();
    const expectedPayload = {
      type: 'REMOVE_TODO_ITEM',
      payload: store.getState().toDoItems[0].id
    };

    expect(actions).toEqual([expectedPayload]);
  });

  it('To do item delete functionality check', () => {
    fireEvent(
      component.getByTestId('todo-control'),
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

  it('No changes in component', () => {
    expect(component).toMatchSnapshot();
  });
});
