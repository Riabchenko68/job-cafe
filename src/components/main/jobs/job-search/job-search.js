import React, { useState } from 'react';

import './job-search.css';

export default function JobSearch ({ onSearch }) {

    const [ enteredText, setEnteredText ] =  useState('');

    const searchItem = [
        { name: 'position', id: 1 },
        { name: 'location', id: 2 },
        { name: 'company', id: 3 },
        { name: 'description', id: 4 }
    ]

    function submitSearchForm(e) {
        e.preventDefault();
        onSearch(e.target.elements);
        return false;
    }

    function onSearchChange (e) {
        setEnteredText (e.target.elements);
    }

    function onReset() {
        setEnteredText('');
    }

    return (
        <div className="col-lg-4">
            <div className="sidebar">
                {/* <h3 className="sidebar-title">Search</h3>
                <div className="sidebar-item search-form">
                    <form onSubmit={submitSearchForm}>
                        <input type="text" name="search" value={enteredText} onChange={onSearchChange}/>
                        <button type="submit" className="search-butom">search</button>
                    </form>
                </div> */}
                

                <h3 className="sidebar-title">Filters</h3>
                <div className="sidebar-item">
                    <form className="search-form" onSubmit={submitSearchForm}>
                        {searchItem.map((item) => (
                            <input
                                key={item.id}
                                className="serch-input"
                                type="text"
                                placeholder={item.name}
                                name={item.name}
                                value={enteredText}
                                onChange={onSearchChange}   
                            >
                            </input>
                        ))}
                        <button type="submit" className="search-butom">search</button>
                        <button type="submit" className="search-butom" onClick={onReset}>reset</button>
                    </form>
                </div>
            </div>
        </div>
    )
    
}