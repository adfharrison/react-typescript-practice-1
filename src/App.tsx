import React, { useState } from 'react';

import ToDoList from './components/ToDoList';
import NewToDo from './components/NewToDo';
import { ToDo } from './models/toDo.model';

const App: React.FC = () => {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const toDoAddHandler = (text: string) => {
    setToDos((prevToDos) => [
      ...prevToDos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  return (
    <div className='App'>
      <NewToDo onAddToDo={toDoAddHandler} />
      <ToDoList items={toDos} />
    </div>
  );
};

export default App;
