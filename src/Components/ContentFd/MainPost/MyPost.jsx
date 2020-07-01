import React from 'react'
import mp from './MyPost.module.css'
import Post from './Posts/Post'
const MyPost = () => {

    let postData = [
        {message: 'Hi, How are you ?', like: 15},
        {message: 'It\'s my first web application', like: 20},
        {message: 'Hello baby', like: 10},
        {message: "Sorry ! I'm busy", like: 0}
    ]

    return (
        <div className={mp.mypost}>
            <h2 align ='center'>My post</h2> 
            <div>
                <div>
                    <textarea placeholder = 'Write something...' rows="4" cols="50"></textarea>
                </div>
                <div>
                    <button >Add post</button>
                </div>
            </div>

            <div className = {mp.posts}>
                <Post message={postData[0].message} like={postData[0].like} />
                <Post message={postData[1].message} like={postData[1].like} />
                <Post message={postData[2].message} like={postData[2].like} />
                <Post message={postData[3].message} like={postData[3].like} />
            </div>
        </div>
    );
}

export default MyPost;