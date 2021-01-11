import './App.css';

function App() {

  return (
    <div className="wrapper">
        <div className="main">
          <h1>toDoList</h1>    
          <form>
              <input type="text" 
                      name="task" 
                      placeholder="Описание" 
                      className="field"/>
              <button type="submit" className="btn">Добавить</button>
          </form>
          <ul className="items">
            <li className="itemTask">
              <div className="inputBlock">
                  <input type="checkbox"
                          className="customCheckbox" 
                          id="3" 
                          />
                  <label htmlFor="3">Тест</label>
              </div>
              <span className="close">x</span>
          </li>
          </ul>
        </div>
    </div>
  )
}

export default App;
