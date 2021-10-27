import React from 'react';
import classes from "./PostItem.module.css";

const PostItem = (props) => {
    console.log(props)
    return (
        <div>
            <div className={classes.post}>
                <div className="post__content">
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>{props.post.body}</div>
                </div>
                <div className="post__btns">
                    <button>Удалить</button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;