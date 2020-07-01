import React from 'react'
import pt from './Post.module.css'
const Post = (obj) => {
    return (
        <div className={pt.post}>
            <img src='https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' />
            {obj.message}
            <div>
                <span>Like {obj.like}</span>
            </div>
            <hr></hr>
        </div>
    );
}

export default Post;