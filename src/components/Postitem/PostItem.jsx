import React from 'react';
import classes from "./PostItem.module.css";

const PostItem = (props) => {
    console.log('Пропсы поста', props)
    return (
        <div>
            <div className={classes.post}>
                <div className="post__content">
                    <strong>{props.number}. {props.post.title}</strong>
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