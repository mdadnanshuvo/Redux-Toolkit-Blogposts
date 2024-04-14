import React from 'react'
import './style.css';

const Posts = (props) => {
    
    const {title, body} = props;
    
   
    
  return (
    <div className='post-container'>
     <div className='post-title'>{title}</div>
     <div className='post-body'>{body}</div>
    </div>
  )
}

export default Posts