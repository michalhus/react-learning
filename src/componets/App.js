import React from 'react';
import SearchBar from './SearchBar';

const App = () => {

    //This function is using callback, gets variable from the child components
    const onSearchSubmit = (term) => {
        console.log(term)
    }

    return(
        <div className='ui container' style={{marginTop: '10px'}}>
            <SearchBar onSubmit={onSearchSubmit}/>
        </div>
    );
}

export default App