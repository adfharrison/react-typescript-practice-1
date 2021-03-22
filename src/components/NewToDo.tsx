import React, { useRef } from 'react';

interface NewToDoProps {
  onAddToDo: (text: string) => void;
}

const NewToDo: React.FC<NewToDoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const ToDoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddToDo(enteredText);
  };
  return (
    <form>
      <div>
        <label htmlFor='todo-text'>ToDo text</label>
        <input type='text' name='todo-text' ref={textInputRef} />
      </div>
      <button type='submit' onClick={ToDoSubmitHandler}>
        {' '}
        Add ToDo
      </button>
    </form>
  );
};

export default NewToDo;
