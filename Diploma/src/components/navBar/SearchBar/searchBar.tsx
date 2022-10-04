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
            <form className='formSearchNavBar' autoComplete='on'
                onSubmit={handleSubmit}
            >
                <input className='inputSearch'
                    type="text"
                    name='search'
                    placeholder='Search...'
                />

                <button className='buttonSearch' value='Search'><img className='headerIcon' src={iconSearch} alt="#" /></button>
            </form>






        </div>
    );
}









