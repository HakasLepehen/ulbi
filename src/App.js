import './App.css';
import {useState} from "react";
import PostsList from "./components/PostsList/PostsList";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Java', body: 'Pizdohen Schvann'},
        {id: 2, title: 'Java', body: 'Pizdohen Schvann'},
        {id: 3, title: 'Java', body: 'Pizdohen Schvann'}
    ]);

    return (
        <div className='app'>
            <PostsList posts={posts} title='Список постов 1'/>
        </div>
    );
}

export default App;
