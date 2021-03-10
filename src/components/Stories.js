import React, {useState} from 'react'
import pic from '../images/pic2.jpeg'
import pic1 from '../images/pic1.jpg'
import pic3 from '../images/pic3.jpg'
import pic4 from '../images/pic4.jpg'

const Stories = () => {
    const [state, setstate] = useState([
        {id: 1, image: pic, name: 'amar kumar swain'},
        {id: 2, image: pic1, name: 'prabhash swain'},
        {id: 3, image: pic3, name: 'pritam ranjan padhi'},
        {id: 4, image: pic4, name: 'trilochan tripathy'},
    ]);
    return (
        <div className="stories">
            {state.map((story) => (
                <div className="stories_col" key={story.id}>
                <div className="stories_body">
                    <img src={story.image} alt=""/>
                    <div className="stories_body_overlay">
                    <div className="strories_body_overlay_image">
                        <img src={story.image} alt=""/>
                    </div>
                    <div className="stories_body_overlay_name">
                        {story.name}
                    </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Stories
