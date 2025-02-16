import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {

    //Deconstructing urls object from the prop and using array index value
    // const img = props.images.map(( {urls}, index) => {
    //     return (
    //         <img key={index} src={urls.regular} />
    //     );
    // })

    const img = props.images.map( image => {
        return (
            //Key should be in a root element in this case a div
            //Created new component that takes in prop and all it children
            <div key={image.id} >
                <ImageCard image={image} />
            </div>
        );
    })

    // //Destructurize off objects from the prop
    // const img = props.images.map(({id, descripiton, urls}) => {
    //     return (
    //         //key should be in a root element in this case a img
    //         <img key={id} alt={descripiton} src={urls.regular} />
    //     );
    // })

    return (
        //Put  className="image-list"  in this ROOT function return div 
        // as putting it in the return const img seems not to be working
        <div className="image-list" >
            {img}
        </div>
    );
}

export default ImageList