import React from 'react';
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
    console.log('Пропсы инпута: ', props);
    return (
        <input ref={ref} className={classes.title} type="text" {...props}/>
    );
})

Input.defaultProps = {placeholder: 'Введите название поста'}

export default Input;