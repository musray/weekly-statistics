import React from 'react';

const Button = (props) => {
    return (
        <button className="form-select"
                onChange={props.controlFunc}>{props.title}</button>
    )
};

Button.propsType = {
    title: React.PropTypes.string.isRequired,
    controlFunc: React.PropTypes.func.isRequired
};

export default Button;