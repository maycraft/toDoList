import React from 'react';
import PropTypes from 'prop-types';

const Task = React.memo(({ id, text, checked, onChangeInput, removeTask }) => {
    const HandleInputChange = id => {
        onChangeInput(id);
    }
    return (
        <li className="itemTask" >
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
});

Task.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChangeInput: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
}

export default Task;