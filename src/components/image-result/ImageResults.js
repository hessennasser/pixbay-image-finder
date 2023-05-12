import React from 'react';
import SingleImage from './SingleImage';

const ImageResults = ({ images, setImageLightbox }) => {
    return (
        <div className={images ? 'images-container' : ''}>
            {images && images.total > 0 ? (
                images.hits.map((image) => (
                    <SingleImage key={image.id} {...image} setImageLightbox={setImageLightbox} />
                ))
            ) : (
                <h2 className='error'>No images found. Please try a different search keyword.</h2>
            )}
        </div>
    );
};

export default ImageResults;
