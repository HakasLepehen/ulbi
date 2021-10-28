import React from 'react';
import classes from "./Button.module.css";

const Button = (props) => {
    console.log('Пропсы кнопки: ', props);

    return (
        <button 
            className={classes.send}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;