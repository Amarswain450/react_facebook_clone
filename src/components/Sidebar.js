import React, {useState} from 'react'
import pic from '../images/pic2.jpeg'
import pic1 from '../images/pic1.jpg'
import pic3 from '../images/pic3.jpg'
import pic4 from '../images/pic4.jpg'
import pic5 from '../images/pic5.jpg'
import pic6 from '../images/pic6.jpg'
import pic7 from '../images/pic7.jpg'

const Sidebar = () => {
    const [state, setstate] = useState([
        {id: 1, image: pic, name: 'amar kumar swain'},
        {id: 2, image: pic1, name: 'prabhash swain'},
        {id: 3, image: pic3, name: 'pritam ranjan padhi'},
        {id: 4, image: pic4, name: 'trilochan tripathy'},
        {id: 5, image: pic5, name: 'mrutyunjaya rout'},
        {id: 6, image: pic6, name: 'bhaghyashree singh richa'},
        {id: 7, image: pic7, name: 'kS raja'}
    ]);
    return (
        <div className="sidebar">
        {state.map((info) => (
            <div className="sidebar__list" key={info.id}>
                <div className="sidebar_list_img">
                    <img src={info.image} alt=""/>
                </div>
                <div className="sidebar_list_name">{info.name}</div>
            </div>
        ))}
        </div>
    )
}

export default Sidebar
