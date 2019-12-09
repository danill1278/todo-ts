import React, { useState } from 'react';
import { ToDoFormInterface } from '../../../types/components/ToDo/ToDoForm/types';

const ToDoForm: React.FC<ToDoFormInterface> = props => {
  const [inputValue, setInputValue] = useState('');

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.length) {
      props.addItem({ title: inputValue, id: Date.now(), status: true });
      setInputValue('');
    }
  };

  return (
    <form
      className="todo__form"
      onSubmit={event => {
        submitForm(event);
      }}
      data-testid="todo_form"
    >
      <input
        className="todo__input"
        type="text"
        data-testid="todo__input"
        onChange={event => {
          inputChangeHandler(event);
        }}
        value={inputValue}
        placeholder="Add ToDo item"
      />
      <input type="submit" className="todo__input todo__input--type-submit" />
    </form>
  );
};

export default ToDoForm;
