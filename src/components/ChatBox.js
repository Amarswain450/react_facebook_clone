import React from 'react'
import pic1 from '../images/pic1.jpg'
import { FaVideo, FaPhone, FaRegWindowClose } from 'react-icons/fa';

const ChatBox = (props) => {
    const closeChat = () => {
        props.closeChat();
    }
    return (
        <>
        {props.state ? (
            <div className="chatbox">
            <div className="chatbox_header">
                <div className="chatbox_first">
                    <div className="chatbox_header_img">
                        <img src={props.current.image ? props.current.image : ''} alt=""/>
                    </div>
                    <div className="chatbox_header_name">{props.current.name ? props.current.name : ''}</div>
                </div>
                <div className="chatbox_second">
                    <FaVideo className="chatbox_second_icon" />
                    <FaPhone className="chatbox_second_icon" />
                    <FaRegWindowClose className="chatbox_second_icon" onClick={closeChat} />
                </div>
            </div>
            <div className="chat_body">
                    <div className="chat_left">
                        <p className="msg">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="chat_right">
                        <p className="msg">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="chat_left">
                        <p className="msg">Lorem ipsum dolor sit amet Lorem, ipsum dolor.</p>
                    </div>
                    <div className="chat_right">
                        <p className="msg">Lorem ipsum dolor sit amet Lorem ipsum dolor sit.</p>
                    </div>
            </div>
            <div className="chat_footer">
                <input type="text" className="chat_input" placeholder="Aa..." />
            </div>
        </div>
        ) : ''}
        </>
    )
}

export default ChatBox
