import React from 'react';
import './blog.css'

const Blog = ({ posts }) => {
    return (
        <div>
            {posts.map((post, index) => (
                <div key={index} className='blogDiv'>
                    <h2>{post.title}</h2>
                    <p>By {post.author} on {post.date}</p>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    )
}

export default Blog;
