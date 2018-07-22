import React from 'react';

const SearchBox = ({searchfield, searchChange}) =>{
    return (
        <div>
            <input className="rounded bg-info p-2" placeholder="Search here" type="text"
                onChange={searchChange}
            />
        </div>
    );
}


export default SearchBox;
