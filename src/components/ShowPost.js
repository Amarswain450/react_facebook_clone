import React, { useState } from 'react'
import pic from '../images/pic2.jpeg'
import pic1 from '../images/pic1.jpg'
import pic3 from '../images/pic3.jpg'
import pic4 from '../images/pic4.jpg'
import userPost1 from '../images/userPost1.jpg'
import userPost2 from '../images/userPost2.jpg'
import userPost3 from '../images/userPost3.jpg'
import userPost4 from '../images/userPost4.jpg'
import { FaRegThumbsUp, FaRegCommentAlt, FaShareAlt } from 'react-icons/fa';

const ShowPost = () => {
    const [state, setState] = useState([
        {
            id: 1,
            userImg: pic,
            name: 'amar swain',
            time: '21h',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laudantium recusandae, aperiam totam voluptas ipsum.',
            postImg: userPost1
        },
        {
            id: 2,
            userImg: pic1,
            name: 'prabhash swain',
            time: '11h',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laudantium recusandae, aperiam totam voluptas ipsum.',
            postImg: userPost2
        },
        {
            id: 3,
            userImg: pic3,
            name: 'pritam ranjan padhi',
            time: '3h',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laudantium recusandae, aperiam totam voluptas ipsum.',
            postImg: userPost3
        },{
            id: 4,
            userImg: pic4,
            name: 'trilochan tripathy',
            time: '8h',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laudantium recusandae, aperiam totam voluptas ipsum.',
            postImg: userPost4
        }
    ]);
    return (
        <div className="show">
            {state.map((post) => (
                <div className="empty" key={post.id}>
                <div className="show_header">
                <div className="show_header_img">
                    <img src={post.userImg} alt=""/>
                </div>
                <div className="show_header_name">{post.name} <div className="date">{post.time}</div></div>
            </div>
            <div className="show_body">
                <div className="show_body_text">
                    {post.text}
                </div>
                <div className="show_body_img">
                    <img src={post.postImg} alt=""/>
                </div>
            </div>
            <div className="show_reactions">
                <span className="reactions">
                <FaRegThumbsUp /> <span className="reaction_text">Like</span>
                </span>
                <span className="reactions">
                <FaRegCommentAlt /> <span className="reaction_text">Comments</span>
                </span>
                <span className="reactions">
                <FaShareAlt /> <span className="reaction_text">Share</span>
                </span>
            </div>
            </div>
            ))}
        </div>
    )
}

export default ShowPost
