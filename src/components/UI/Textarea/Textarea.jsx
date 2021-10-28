import React from 'react';
import classes from "./Textarea.module.css";

const Textarea = React.forwardRef((props, ref) => {
    console.log('Пропсы ареа-текста: ', props);
    return (
            <textarea ref={ref} className={classes.textarea} {...props}/>
    );
});

Textarea.defaultProps = {placeholder: 'Введите описание поста'}

export default Textarea;