import React from 'react'
import { FaDownload, FaUserAlt } from "react-icons/fa"
import { FiEye } from "react-icons/fi"

const SingleImage = ({ webformatURL: img, user, previewURL, setImageLightbox }) => {
    return (
        <div className='single-img'>
            <img src={img} alt='' />
            <div className='img-info'>
                <div>
                    <FaUserAlt className='icon' />
                    <span>{user}</span>
                </div>
                <div className='icons'>
                    <FaDownload className='download-btn' onClick={() => {
                        window.open(previewURL)
                    }} />
                    <FiEye className='view-btn' onClick={() => setImageLightbox(img)} />
                </div>
            </div>
        </div>
    )
}

export default SingleImage
