import React, {useState} from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

const App = () => {

    const [images, setImages] = useState([]);

    //This function is using callback, gets variable from the child components
    const onSearchSubmit = async (term) => {
        //root API location + specific API route
        //unsplash.get axios api js file that was create for reusability see imports
        const response = await unsplash.get('/search/photos', {params: {query: term}});
        setImages(response.data.results)
    }

    return(
        <div className='ui container' style={{marginTop: '10px'}}>
            <SearchBar onSubmit={onSearchSubmit}/>
            {/* {x} */}
            <ImageList images={images}/>       
        </div>
    );
}

export default App