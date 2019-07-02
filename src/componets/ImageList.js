import React, {useEffect} from 'react';

const ImageList = (props) => {
   
    // debugger
    console.log(`Array of the Objects:   ${props.imagesList}`)
    console.log(props.imagesList)
    console.log(props.imagesList[0])
    console.log(`Length of the array:  ${props.imagesList.length}`)

    //TODO: Might need useEffect Hooks
    // useEffect((props) => {
    //     return () => {
    //          x = (props.imageList.length <= 0) 
    //     };
    //   });

    return (
        <div>
            <ul>
                Temporary Text...
            </ul>
        </div>
    );
}


/*JS array map function that itterates tru 1st array and creates 2nd modified array
arrayName.map( (value) => {
    return value * 10;
})
*/
   // const img = props.images.map( (image) => {
    //     return <img src={image} />
    // });



export default ImageList