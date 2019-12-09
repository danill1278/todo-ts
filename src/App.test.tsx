import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('test app component', () => {
  const mockStore = configureStore([]);
  let store: any = mockStore({
    toDoItems: [
      {
        title: 'Do homerwork',
        id: 1,
        status: true
      }
    ],
    itemsToShow: 'all'
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
