import React, {useEffect, useRef} from 'react';

const ImageCard = (props) => {

    //Sets a referance from DOM - hook use
    const imageRef = useRef({});

    //Define funcion using const or let with name of the fuction
    const setSpans = () => {
        console.log(imageRef.current.clientHeight);
    }
    

    useEffect (() => {
        imageRef.current.addEventListener('load', setSpans);
    })

 


    // const onButtonClick = () => {
    //     // `current` points to the mounted text input element
    //     imageRef.current.clientHeight;
    // };

    // return (
    //       <>
    //         <input ref={imageRef} type="text" />
    //         <button onClick={onButtonClick}>Focus the input</button>
    //       </>
    // ); 
      
    console.log(imageRef)
    
    // console.log(imageRef.current.addEventListener('load'))

    // console.log(imageRef.current.clientHeight)   // is not loaded yet wait before rendering
    
    
 

    // setSpans() {
        
    // }


    //Deconstruction of objects/values from the prop
    const {descritpion, urls} = props.image;

    return (
        <div>
            <img
            ref={imageRef} 
            alt={descritpion} 
            src={urls.regular} /> 
        </div>
    )
}

export default ImageCard