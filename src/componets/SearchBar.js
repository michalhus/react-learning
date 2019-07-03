import React, {useState}  from 'react';

const SearchBar = (props) => {

    //Again, state hooks
    const [searchInput, setSearchInput] = useState([{ term: '' }]);

    //Callback function used by the parent coponent - VERY IMPORTANT
    const onFormSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(searchInput);
    }

    return (
        <div className='ui segment'>
            <form className='ui form' onSubmit={onFormSubmit}>
                <div className='field'>
                    <label>Image Search</label>
                    {/* Below code updates state of the user input/ query param onChange event - when user types */}
                    {/* value={searchInput.term} update what user types */}
                    <input type='text' value={searchInput.term} onChange={e => setSearchInput(e.target.value)}></input>
                </div>
            </form>
        </div>
    );
}

export default SearchBar