import React from 'react';
import classes from "./Button.module.css";

const Button = (props, ref) => {
    console.log('Пропсы кнопки: ', props);
    const addNewPost = (e) => {
        e.preventDefault();
        console.log('addNewPost Сработал!', ref);
        // console.log('Полученный textref', titleRef.current.value);
        // console.log('Полученный textref', textRef.current.value);
    }
    return (
        <button 
            className={classes.send}
            onClick={addNewPost}
        >
            {props.children}
        </button>
    );
};

export default Button;