const Task = ({ id, text, checked, onChangeInput, removeTask, error }) => {
    const HandleInputChange = id => {
        onChangeInput(id);
    }
    return (
        <li className={`itemTask ${(error && checked) ? ' item-error' : ''}`}>
            <div className="inputBlock">
            <input type="checkbox"
                    className="customCheckbox" 
                    id={id}
                    checked={checked}
                    onChange={() => HandleInputChange(id)}
                    />
            <label htmlFor={id}>{text}</label>
            </div>
            <span className="close" onClick={() => removeTask(id, checked)}>x</span>
        </li>
    )
}

export default Task;