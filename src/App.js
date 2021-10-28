import './App.css';
import {useState} from "react";
import PostsList from "./components/PostsList/PostsList";
import PostForm from "./components/PostForm/PostForm";

function App() {
    let [posts, setPosts] = useState([
        {id: 1, title: 'Java', body: 'Pizdohen Schvann'},
        {id: 2, title: 'Java', body: 'Pizdohen Schvann'},
        {id: 3, title: 'Java', body: 'Pizdohen Schvann'}
    ]);
    
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const deletePost = (index) => {
        const newPosts = posts.filter((post) => post.id !== index);
        setPosts(newPosts)
    }

    return (
        <div className='app'>
            <PostForm
                create={createPost}
                posts={posts}
            />
            <PostsList
                posts={posts}
                title='Список постов 1'
                deletePost={deletePost}
            />
        </div>
    );
}

export default App;
