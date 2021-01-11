const Task = props => {
    return (
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
    )
}

export default Task;