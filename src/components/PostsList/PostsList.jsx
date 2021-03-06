import React from 'react';
import PostItem from "../Postitem/PostItem";

const PostsList = ({posts, title, deletePost}) => {
    if(!posts.length) {
        return (
            <div>
                <h1 className='title'>Постов нет...</h1>
            </div>
        )
    }
    return (


        <div>
            <h1 className='title'>{title}</h1>
            {posts.map((post, index) =>
                <PostItem
                    number={index + 1}
                    post={post}
                    key={index}
                    deletePost={deletePost}
                />
            )}
        </div>
    );
};

export default PostsList;