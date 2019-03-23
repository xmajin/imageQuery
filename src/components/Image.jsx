import React from 'react';
import '../resources/styles/image.scss';

const Image = props =>
    <div id="image">
        <img src={props.url} alt="Unsplash art" />
    </div>

export default Image;
