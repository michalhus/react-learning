import React, {useState}  from 'react';

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState([{ term: '' }]);

    return (
        <div className='ui segment'>
            <form className='ui form'>
                <div className='field'>
                    <label>Image Search</label>
                    <input type='text' value={searchInput.term} onChange={e => setSearchInput(e.target.value)}></input>
                </div>
            </form>
        </div>
    );
}

export default SearchBar