const Task = ({ id, text, checked, onChangeInput }) => {
    const HandleInputChange = id => {
        onChangeInput(id);
    }
    return (
        <li className="itemTask">
            <div className="inputBlock">
            <input type="checkbox"
                    className="customCheckbox" 
                    id={id}
                    checked={checked}
                    onChange={() => HandleInputChange(id)}
                    />
            <label htmlFor={id}>{text}</label>
            </div>
            <span className="close">x</span>
        </li>
    )
}

export default Task;