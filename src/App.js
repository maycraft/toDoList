import { useState } from 'react';
import './App.css';
import Task from './components/Task';

function App() {
  const [state, setState] = useState({ tasks: [] });
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  }

  const onSubmit = event => {
    event.preventDefault();
    const newTask = {}
    newTask.id = `task${new Date().getTime()}`;
    newTask.text = value;
    newTask.checked = false;
    setState({ tasks: [...state.tasks, newTask] });
    setValue('');
  }

  const onChangeInput = id => {
    const copyTasks = [...state.tasks];
    copyTasks.forEach( task => {
      if(task.id === id) task.checked = !task.checked; 
    })
    setState({ tasks: copyTasks });
  }

  console.log(state.tasks);
  return (
    <div className="wrapper">
        <div className="main">
          <h1>toDoList</h1>    
          <form onSubmit={onSubmit}>
              <input type="text" 
                      name="task" 
                      value={value}
                      onChange={handleChange}
                      placeholder="Описание" 
                      className="field"/>
              <button type="submit" className="btn">Добавить</button>
          </form>
          <ul className="items">
            {
              state.tasks.map( task => <Task key={task.id} 
                                              id={task.id} 
                                              text={task.text} 
                                              checked={task.checked}
                                              onChangeInput={onChangeInput}
                                              /> )
            }
            
          </ul>
        </div>
    </div>
  )
}

export default App;
