import React, { useState } from 'react';

const apiUrl = 'https://pixabay.com/api/';
const apiKey = '36330530-47ddfe6929b2b649cc7e0874b';

const Search = ({ setImages }) => {
    const [searchText, setSearchText] = useState('');

    const delayedSearch = (value) => {
        setTimeout(() => {
            getImages(value);
        }, 300); // Delay of 300 milliseconds
    };

    const getImages = async (value) => {
        const response = await fetch(
            `https://cors-anywhere.herokuapp.com/${apiUrl}?key=${apiKey}&q=${value}&per_page=15`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        const imagesData = await response.json();
        console.log(imagesData);
        setImages(imagesData);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchText(value);
        delayedSearch(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getImages(searchText);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="search-input"
                value={searchText}
                onChange={handleChange}
            />
            <button className="search-btn" type="submit">
                Search
            </button>
        </form>
    );
};

export default Search;
