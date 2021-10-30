import React from 'react';
import classes from "./PostItem.module.css";
import Button from "../UI/Button/Button";

const PostItem = (props) => {

    return (
        <div>
            <div className={classes.post}>
                <div className="post__content">
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>{props.post.body}</div>
                </div>
                <div className="post__btns">
                    <Button
                        className={classes.delete}
                        onClick={()=> {props.deletePost(props.post.id)}}
                    >
                        Удалить пост
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;