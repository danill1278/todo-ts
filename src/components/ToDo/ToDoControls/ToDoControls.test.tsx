import React from 'react';
import ToDoControls from './ToDoControls';
//testing tools
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
//tools for redux in testings
import * as actionCreators from '../../../store/actions/actions';

describe('Todo list items test:', () => {
  let component: any;
  it("Check setuping control's name from props ", () => {
    component = render(
      <ToDoControls
        showAllItems={actionCreators.showAllItems}
        showComplitedItems={actionCreators.showComplitedItems}
        showActiveItems={actionCreators.showActiveItems}
      />
    );
    expect(component.getAllByTestId('todo-control').length).toBe(3);
  });
});
