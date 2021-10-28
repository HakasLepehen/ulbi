import React from 'react';
import classes from "./Input.module.css";

const Input = (props) => {
    console.log('Пропсы инпута: ', props);
    return (
        <input className={classes.title} type="text" {...props}/>
    );
};

Input.defaultProps = {placeholder: 'Введите название поста'}

export default Input;