import React, {useEffect} from 'react';

const ImageCard = (props) => {

    //WIP - need to reverse ENG + read more docs
    let imageRef = React.createRef();


    //Deconstruction of objects/values from the prop
    const {descritpion, urls} = props.image;

    console.log(imageRef.current);

    return (
        <div>
            <img key={props.key} 
            alt={descritpion} 
            src={urls.regular} /> 
        </div>
    )  
}

export default ImageCard