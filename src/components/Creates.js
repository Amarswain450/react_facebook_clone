import React from 'react'
import pic from '../images/pic2.jpeg'
import { FaVideo, FaFileImage, FaRegGrinAlt } from 'react-icons/fa';

const Creates = () => {
    return (
        <div className="creates">
            <div className="create_first">
                <div className="create_first_img">
                <span>
                    <img src={pic} alt=""/>
                </span>    
                </div>
                <div className="create_first_input">
                    <input type="text" className="create_first_inputs" placeholder="Amar what are your mind ?" />
                </div>
            </div>
            <div className="create_second">
            <span className="create_second_icon">
                <FaVideo className="redColor" /> <span className="text">Like Video</span>
            </span>
            <span className="create_second_icon">
                <FaFileImage className="greenColor" /> <span className="text">Photo / Video</span>
            </span>
            <span className="create_second_icon">
                <FaRegGrinAlt className="orangeColor" /> <span className="text">Feeling</span>
            </span>
            </div>
        </div>
    )
}

export default Creates
