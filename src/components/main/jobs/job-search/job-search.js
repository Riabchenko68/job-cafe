import React, { useState } from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import './job-search.css';

export default function JobSearch ({ onSearch }) {

    const checkBoxItem = [
        {name: 'junior', id: 5 },
        {name: 'mid', id: 6 },
        {name: 'senior', id: 7 },
        {name: 'manager', id: 8 }
    ]

    const [ enteredText, setEnteredText ] =  useState('');

    const [ checked, setChecked ] = useState(new Array(checkBoxItem.length).fill(false));


    const searchItem = [
        { name: 'position', id: 1 },
        { name: 'location', id: 2 },
        { name: 'company', id: 3 },
        { name: 'description', id: 4 },
    ]

    function submitSearchForm(e) {
        onSearch(e.target.elements);
        e.preventDefault();
        console.log(e.target.elements);
        return false;
    }

    function onCheckBoxChange(position) {
        const updatedCheckedState = checked.map((item, index) => 
            index === position ? !item : item
        );
        setChecked(updatedCheckedState);
    }

    function onSearchChange (e) {
        setEnteredText(e.target.elements);
    }

    function onReset() {
        setEnteredText('');
        setChecked([false, false, false, false]);
    }

    return (
        <div className="col-lg-4">
            <div className="sidebar"> 
                <h3 className="sidebar-title">Filters</h3>
                <div className="sidebar-item categories">
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
                            />
                        ))}
                        <div className="serch-checkbox">
                            <legend style={{fontSize: '1.1em'}}>seniority</legend>
                            {checkBoxItem.map ((item, index) => (
                                <div key={item.id}>
                                    <FormGroup>
                                        <FormControlLabel control={
                                            <Checkbox id={item.name}
                                                key={index}
                                                checked={checked[index]}
                                                value={item.name}
                                                onChange={() => onCheckBoxChange(index)} 
                                                color="info" 
                                            />} 
                                            label={item.name} />
                                    </FormGroup>
                                </div> 
                            ))}
                        </div>
                        <button key="search" type="submit" className="search-butom">search</button>
                        <button key="reset" type="submit" className="search-butom" onClick={onReset}>reset</button>
                    </form>
                </div>
            </div>
        </div>
    )  
}


/* <h3 className="sidebar-title">Search</h3>
                <div className="sidebar-item search-form">
                    <form onSubmit={submitSearchForm}>
                        <input type="text" name="search" value={enteredText} onChange={onSearchChange}/>
                        <button type="submit" className="search-butom">search</button>
                    </form>
                </div> 
                
                <Checkbox
                                        id={item.name}
                                        key={index}
                                        checked={checked[index]}
                                        value={item.name}
                                        onChange={() => onCheckBoxChange(index)} 
                                        color="info"
                                    />
                                    <label htmlFor={item.name}>{item.name}</label> */