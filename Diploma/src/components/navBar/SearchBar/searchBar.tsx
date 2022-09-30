import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';


import iconSearch from '../../../images/icons/search.svg';

import '../SearchBar/searchBarStyle.css';



export function SearchBar() {

    const [searchParams, setSearchParams] = useSearchParams();
    const { } = searchParams.get('post') || '';
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const form = e.target;
        const query = form.search.value;
        setSearchParams({ post: query })
    }

    return (
        <div>
            <form className='inputSearchNavBar' autoComplete='on'
                onSubmit={handleSubmit}
            >
                <input className='inputSearch'
                    type="search"
                    name='search'
                    placeholder='Search...'
                />

                <button className='buttonSearch' value='Search'><img src={iconSearch} alt="#" /></button>
            </form>






        </div>
    );
}









