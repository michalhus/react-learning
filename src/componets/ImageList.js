import React from 'react';

const ImageList = (props) => {

    const img = props.images.map(( {urls}, index) => {
        return (
            <img src={urls.regular} />
        );
    })

    return (
        <div>
            {img}
        </div>
    );
}

export default ImageList