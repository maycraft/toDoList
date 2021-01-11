import { useState } from 'react';
import './App.css';
import Task from './components/Task';

function App() {
  const [state, setState] = useState({ tasks: [] });
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

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

  const isCheckMarked = () => state.tasks.some(item => item.checked);
  
  const onChangeInput = id => {
    const copyTasks = [...state.tasks];
    copyTasks.forEach( task => {
      if(task.id === id) task.checked = !task.checked; 
    })
    setState({ tasks: copyTasks });
  }
  
  const removeTask = (id, checked) => {
    if(!checked){
      const copyTasks = [...state.tasks];
      const findTask = copyTasks.find( task => task.id === id);
      const idx = copyTasks.indexOf(findTask);
      copyTasks.splice(idx, 1);
      setState({ tasks: copyTasks });
      setError('');
    }else {
      setError('Нельзя удалить');
    }
  }

  console.log(isCheckMarked());
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
          <div className={`error ${(error && isCheckMarked()) && ' show'}`}>{error}</div>
          <ul className="items">
            {
              state.tasks.map( task => <Task key={task.id} 
                                              id={task.id} 
                                              text={task.text} 
                                              checked={task.checked}
                                              onChangeInput={onChangeInput}
                                              removeTask={removeTask}
                                              error={error}
                                              /> )
            }
            
          </ul>
        </div>
    </div>
  )
}

export default App;
