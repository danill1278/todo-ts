import React, { useState } from 'react';
import * as actionTypes from '../store/actions/actionTypes';

interface ToDoFormInterface {
  addItem: actionTypes.AddItemType;
}

const ToDoForm: React.FC<ToDoFormInterface> = ( props ) => {
  const [inputValue, setInputValue] = useState('');

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.addItem({ title: inputValue, id: performance.now(), status: true });
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


export default ToDoForm;
