import './App.css';
import {useState} from "react";
import PostsList from "./components/PostsList/PostsList";
import PostForm from "./components/PostForm/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Java', body: 'Pizdohen Schvann'},
        {id: 2, title: 'Java', body: 'Pizdohen Schvann'},
        {id: 3, title: 'Java', body: 'Pizdohen Schvann'}
    ]);
    
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    return (
        <div className='app'>
            <PostForm create={createPost}/>
            <PostsList posts={posts} title='Список постов 1'/>
        </div>
    );
}

export default App;
