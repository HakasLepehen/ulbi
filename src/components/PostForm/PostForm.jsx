import React, {useState} from 'react';
import classes from "./PostForm.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Textarea from "../UI/Textarea/Textarea";

const PostForm = ({create, posts}) => {
    const [post, setPost] = useState({id: '', title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: posts.length + 1
        }
        console.log(newPost);
        create(newPost);
        setPost({id: '', title: '', body: ''})
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
                className={classes.send}
                onClick={addNewPost}
            >
                Создать пост
            </Button>
        </form>
    );
};

export default PostForm;