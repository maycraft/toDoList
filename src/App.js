import { useState } from 'react';
import './App.css';
import Task from './components/Task';

function App() {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  }

  return (
    <div className="wrapper">
        <div className="main">
          <h1>toDoList</h1>    
          <form>
              <input type="text" 
                      name="task" 
                      value={value}
                      onChange={handleChange}
                      placeholder="Описание" 
                      className="field"/>
              <button type="submit" className="btn">Добавить</button>
          </form>
          <ul className="items">
            <Task/>
          </ul>
        </div>
    </div>
  )
}

export default App;
