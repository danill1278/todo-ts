import '@testing-library/jest-dom/extend-expect';
import { reducer } from './reducer';
import { initialState } from './reducer';
import * as actionCreators from '../actions/actions';

describe('team reducer', () => {
  let testState = initialState;
  afterEach(() => {
    testState = initialState;
  });

  it('should return the initial state', () => {
    expect(reducer(testState, { type: 'randomPayload' })).toEqual(testState);
  });

  it('handle ADD_TODO_ITEM', () => {
    let mockData = {
      id: 1,
      title: 'title',
      status: true
    };
    let expectedState = {
      toDoItems: [
        {
          id: 1,
          title: 'title',
          status: true
        }
      ],
      itemsToShowFlag: 'all'
    };
    expect(reducer(testState, actionCreators.addItem(mockData))).toEqual(
      expectedState
    );
  });
  it('handle REMOVE_TODO_ITEM', () => {
    let mockData = {
      id: 1,
      title: 'title',
      status: true
    };
    let expectedState = reducer(testState, actionCreators.addItem(mockData));
    expect(
      reducer(expectedState, actionCreators.removeItem(mockData.id))
    ).toEqual(testState);
  });
  it('handle CHANGE_ITEM_STATUS', () => {
    let mockData = {
      id: 1,
      title: 'title',
      status: true
    };
    let expectedState = reducer(testState, actionCreators.addItem(mockData));
    expectedState = reducer(
      expectedState,
      actionCreators.changeStatus(mockData.id)
    );
    expect(expectedState.toDoItems[0].status).not.toBe(mockData.status);
  });
  it('handle SHOW_ALL_ITEMS', () => {
    expect(
      reducer(testState, actionCreators.showAllItems()).itemsToShowFlag
    ).toBe('all');
  });
  it('handle SHOW_COMPLITED_ITEMS', () => {
    expect(
      reducer(testState, actionCreators.showComplitedItems()).itemsToShowFlag
    ).toBe('complited');
  });
  it('handle SHOW_ACTIVE_ITEMS', () => {
    expect(
      reducer(testState, actionCreators.showActiveItems()).itemsToShowFlag
    ).toBe('active');
  });
});
