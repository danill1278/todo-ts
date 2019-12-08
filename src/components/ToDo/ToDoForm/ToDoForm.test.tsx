import React from 'react';
import ToDoForm from './ToDoForm';
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
    component = render(
      <Provider store={store}>
        <ToDoForm
          addItem={item => store.dispatch(actionCreators.addItem(item))}
        />
      </Provider>
    );
  });

  afterEach(() => {
    store.clearActions();
  });

  it('Check addign functionality', () => {
    fireEvent.change(component.getByTestId('todo__input'), {
      target: { value: 'Prepearing for test' }
    });
    fireEvent.submit(component.getByTestId('todo_form'), {
      bubbles: true,
      cancelable: true
    });

    expect(store.getActions()[0].type).toBe('ADD_TODO_ITEM');
    expect(store.getActions()[0].payload.title).toBe('Prepearing for test');
    store.clearActions();
    fireEvent.change(component.getByTestId('todo__input'), {
      target: { value: '' }
    });
    fireEvent.submit(component.getByTestId('todo_form'), {
      bubbles: true,
      cancelable: true
    });

    expect(store.getActions().length).toBe(0);
  });

  it('No changes in component', () => {
    expect(component).toMatchSnapshot();
  });
});
