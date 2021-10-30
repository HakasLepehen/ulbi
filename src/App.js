import './App.css';
import {useMemo, useState} from "react";
import PostsList from "./components/PostsList/PostsList";
import PostForm from "./components/PostForm/PostForm";
import PostFilter from "./components/PostFilter/PostFilter";

function App() {
    let [posts, setPosts] = useState([
        {id: 4, title: 'Puthon', body: 'PHP also shit!'},
        {id: 1, title: 'Java', body: 'Pizdohen Schvann'},
        {id: 2, title: 'JavaScript', body: 'Post for Javascript'},
        {id: 3, title: 'PHP', body: 'PHP is shit!'}
    ]);

    const [filter, setFilter] = useState({sort: '', query: ''});

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])

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
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostsList
                posts={sortedAndSearchedPosts}
                title='Список постов 1'
                deletePost={deletePost}
            />
        </div>
    );
}

export default App;
