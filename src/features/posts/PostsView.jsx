import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './postSlice';
import Posts from './Posts';

const PostsView = () => {

    const {posts,error,isLoading} = useSelector((state) => state.posts);
    console.log(isLoading);

  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    },[])
    
   
  return (
    <div>
        {isLoading && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
        
        {posts && posts.map((p) => 
         <Posts key={p.id} title = {p.title} body = {p.body}  />)} 
    </div>
  )
}

export default PostsView