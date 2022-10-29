import React from 'react'
import '../Styles/home.css';
import DataCard from './DataCard';

const Search = ({ data, query, setQuery }) => {
    return (
        <>
            <div className='container-fluid'>
                <strong>Search :</strong> <input className='searchbg' type="text" placeholder="Search..." aria-label="Search" onChange={(e) => setQuery(e.target.value)} />
                {data.filter((item) => item.capsule_serial.toLowerCase().includes(query)).map((item, i) => (
                    (query === '') ?
                        <>
                            <h1 className='search'>search....</h1>
                        </>
                        :
                        <DataCard
                            key={i}
                            item={item}
                        />
                ))}
            </div>
        </>
    )
}

export default Search