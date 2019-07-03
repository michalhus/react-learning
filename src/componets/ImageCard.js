import React, {useEffect, useRef, useState} from 'react';

const ImageCard = (props) => {

    //Hooks for state and setState in react 16.8
    const [spans, setSpans] = useState(0)

    //Define a referance from DOM hook and it's use
    const imageRef = useRef({});

    //Define funcion using const with name of the fuction
    //This function is executed on the load of the page - see useEffect()
    const onLoad = () => {
        // console.log(imageRef.current.clientHeight);
        //imageRef is DOM object - current is object's current status - clientHeight is element/object's attribute 
        const height = imageRef.current.clientHeight
        //Updating state of the spans variable
        setSpans(Math.ceil( height / 200))
    }

    //Detect changes in state of the page - uses eventListener to update state of the prop
    useEffect (() => {
        imageRef.current.addEventListener('load', onLoad);
    })
    
    //Deconstruction of objects/values from the prop
    const {descritpion, urls} = props.image;

    return (
            <img style={{gridRowEnd: `span${spans}` }}
            ref={imageRef} 
            alt={descritpion} 
            src={urls.regular} /> 
    )
}

export default ImageCard