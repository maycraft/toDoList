import React from 'react'
import PropTypes from 'prop-types'

export const Form = React.memo(({onSubmit, value, handleChange, isDisabled}) => {
    return (
        <form onSubmit={onSubmit}>
            <input type="text"
                name="task"
                value={value}
                onChange={handleChange}
                placeholder="Описание"
                className="field"
            />
            <button type="submit" className="btn" disabled={isDisabled}>Добавить</button>
        </form>
    )
});

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    isDisabled: PropTypes.bool
}
