import React, {useState} from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

const App = () => {

    //State hooks for array from API response
    const [images, setImages] = useState([]);

    //This function is using callback, gets variable from the child components
    const onSearchSubmit = async (term) => {
        //Root API location + Specific API route
        //unsplash.get axios api js file that was create for reusability see imports
        const response = await unsplash.get('/search/photos', {params: {query: term}});
        //Updates state of images array with response from the API
        setImages(response.data.results)
    }

    return(
        <div className='ui container' style={{marginTop: '10px'}}>
            <SearchBar onSubmit={onSearchSubmit}/>
            <ImageList images={images}/>       
        </div>
    );
}

export default App