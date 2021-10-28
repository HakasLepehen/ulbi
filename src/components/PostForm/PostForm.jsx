import React, {useState} from 'react';
import classes from "./PostForm.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Textarea from "../UI/Textarea/Textarea";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '12', body: '123'})

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        }
        create(newPost);
        setPost({title: '', body: ''})
    }

    return (
        <form className={classes.myForm}>
            <Input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <Textarea
                value={body}
                onChange={e => setBody(e.target.value)}
            />
            <Button
                onClick={addNewPost}
            >
                Создать пост
            </Button>
        </form>
    );
};

export default PostForm;