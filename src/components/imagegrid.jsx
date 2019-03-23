import React from 'react';
import '../resources/styles/Imagegrid.scss';
import Image from '../components/Image.jsx';


const Imagegrid = props => {
    const results = props.data;
    let images;
    let page;

    if (results.length > 0) {
        images = results.map(i => <Image url={i.urls.thumb} />);
        page = props.page;
    } else {
        images = "No images";
        page = 0;
    }

    return (
        <div className="Imagegrid">
            {images}
            <div id="pages">
                <span>Page: </span>{page}
            </div>
        </div>
    );
};

export default Imagegrid;
