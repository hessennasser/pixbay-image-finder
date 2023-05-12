import React, { useEffect, useRef } from 'react';
import { RiCloseCircleFill } from 'react-icons/ri';

const ImageLightbox = ({ img, setImageLightbox }) => {
    const lightboxRef = useRef(null);

    const handleClickOutside = (event) => {
        if (lightboxRef.current && !lightboxRef.current.contains(event.target)) {
            setImageLightbox(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='lightbox-overly'>
            <RiCloseCircleFill className='close-btn' onClick={() => setImageLightbox(null)} />
            <div ref={lightboxRef} className='lightbox-wrapper'>
                <img src={img} alt='' />
            </div>
        </div>
    );
};

export default ImageLightbox;
