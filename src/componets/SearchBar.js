import React, {useState}  from 'react';

const SearchBar = (props) => {

    const [searchInput, setSearchInput] = useState([{ term: '' }]);

    const onFormSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(searchInput);
    }

    return (
        <div className='ui segment'>
            <form className='ui form' onSubmit={onFormSubmit}>
                <div className='field'>
                    <label>Image Search</label>
                    <input type='text' value={searchInput.term} onChange={e => setSearchInput(e.target.value)}></input>
                </div>
            </form>
        </div>
    );
}

export default SearchBar