import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './ToDo';
//testing tools
import '@testing-library/jest-dom/extend-expect';
import * as actionCreators from '../../store/actions/actions';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

it('renders without crashing', () => {
    const mockStore = configureStore([]);
    const store:any = mockStore({
        toDoItems: [
          {
            title: 'Do homerwork',
            id: 1,
            status: true
          }
        ],
        itemsToShow: 'all'
      });
    const div = document.createElement('div');    
    ReactDOM.render(
        <Provider store={store}>
            <ToDo 
            items={store.getState().toDoItems} 
            showAllItems={actionCreators.showAllItems} 
            showComplitedItems={actionCreators.showComplitedItems} 
            itemsToShowFlag={store.getState().itemsToShow}
            removeItem={actionCreators.removeItem}
            showActiveItems={actionCreators.showActiveItems}
            changeStatus={actionCreators.changeStatus}
            addItem={actionCreators.addItem}
            />
        </Provider>,
        div 
    );
    ReactDOM.unmountComponentAtNode(div);
  });