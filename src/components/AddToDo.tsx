import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem } from '../store/actions/actions';

import { AddItemType } from '../store/actions/actionTypes';

interface AddToDoInterface {
  addItem?: AddItemType;
}

const ConnectedAddToDo: React.FC<AddToDoInterface> = ({ addItem }) => {
  const [inputValue, setInputValue] = useState('');

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (addItem) {
      addItem({ title: inputValue, id: performance.now(), status: true });
    }
  };

  return (
    <form
      onSubmit={event => {
        submitForm(event);
      }}
    >
      <input
        type="text"
        onChange={event => {
          inputChangeHandler(event);
        }}
        value={inputValue}
        placeholder="Add ToDo item"
      />
      <input type="submit" />
    </form>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return { addItem: bindActionCreators(addItem, dispatch) };
};

const AddToDo = connect(null, mapDispatchToProps)(ConnectedAddToDo);

export default AddToDo;
