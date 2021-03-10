import React from 'react'
import Creates from './Creates'
import ShowPost from './ShowPost'
import Stories from './Stories'

const Post = () => {
    return (
        <div className="posts">
            <Stories />
            <Creates />
            <ShowPost />
        </div>
    )
}

export default Post
