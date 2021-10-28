import React, {useRef, useState} from 'react';
import classes from "./PostForm.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Textarea from "../UI/Textarea/Textarea";

const PostForm = () => {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const titleRef = useRef();
    const textRef = useRef();

    // const addNewPost = (e) => {
    //     e.preventDefault();
    //     console.log('addNewPost Сработал!')
    //     // console.log('Полученный textref', titleRef.current.value);
    //     // console.log('Полученный textref', textRef.current.value);
    // }

    return (
            <form className={classes.myForm}>
                <Input
                    ref={titleRef}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <Textarea
                    ref={textRef}
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <Button
                    // onClick={addNewPost(titleRef.current.value, textRef.current.value)}
                >
                    Создать пост
                </Button>
            </form>
    );
};

export default PostForm;