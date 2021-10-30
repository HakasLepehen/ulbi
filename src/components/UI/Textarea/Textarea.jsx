import React from 'react';
import classes from "./Textarea.module.css";

const Textarea = (props) => {
    return (
            <textarea className={classes.textarea} {...props}/>
    );
};

Textarea.defaultProps = {placeholder: 'Введите описание поста'}

export default Textarea;