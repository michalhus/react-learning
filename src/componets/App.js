import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

const App = () => {

    //This function is using callback, gets variable from the child components
    const onSearchSubmit = (term) => {
        // console.log(term)
        //root API location + specific API route
        axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 
                    'Client-ID 94b1974dabe9292a5e385f4bba69e1919cc1a3d29d7995a08b8861bb2daec10f'
            }
        }
        );
    }

    return(
        <div className='ui container' style={{marginTop: '10px'}}>
            <SearchBar onSubmit={onSearchSubmit}/>
        </div>
    );
}

export default App