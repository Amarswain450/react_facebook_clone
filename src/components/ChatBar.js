import React, { useState } from 'react'
import pic1 from '../images/pic1.jpg'
import pic3 from '../images/pic3.jpg'
import pic4 from '../images/pic4.jpg'
import pic5 from '../images/pic5.jpg'
import pic6 from '../images/pic6.jpg'
import pic7 from '../images/pic7.jpg'

const ChatBar = (props) => {
    const [state, setState] = useState([
        {id: 1, image:pic1, name: 'prabhash swain'},
        {id: 2, image:pic3, name: 'pritam ranjan padhi'},
        {id: 3, image:pic4, name: 'trilochan tripathy'},
        {id: 4, image:pic5, name: 'mrutyunjaya rout'},
        {id: 5, image:pic6, name: 'bhaghyashree singh richa'},
        {id: 6, image:pic7, name: 'kS raja'}
    ]);

    const openChat = (user) => {
        props.openChat(user)
    }

    return (
        <div className="chatBar">
            {state.map((user) => (
            <div className="chatBar_list" key={user.id} onClick={() => openChat(user)}>
                <div className="chatBar_list_img">
                    <img src={user.image} alt=""/>
                    <div className="status"></div>
                </div>
                <div className="chatBar_list_name">{user.name}</div>
            </div>
            ))}
        </div>
    )
}

export default ChatBar
