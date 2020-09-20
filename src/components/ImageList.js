import React from 'react';
import Imagecard from './Imagecard';
import './ImageList.css';

const ImageList = ({ images }) => {
    let renderedImages = images.map(e => <Imagecard image={e} />);
    return <div className='image-list'>{renderedImages}</div>
}

export default ImageList;