import React, {useState} from 'react';
import classes from "./PostForm.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Textarea from "../UI/Textarea/Textarea";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        }
        console.log(newPost);
        create(newPost);
        setPost({title: '', body: ''})
    }

    return (
        <form className={classes.myForm}>
            <Input
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
            />
            <Textarea
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
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