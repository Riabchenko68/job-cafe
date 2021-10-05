import React from 'react';

import './job-search.css';

export default function JobSearch () {

    return (
        <div className="col-lg-4">

            <div className="sidebar">

                <h3 className="sidebar-title">Search</h3>
                <div className="sidebar-item search-form">
                    <form action="">
                        <input type="text" />
                        <button type="submit" className="bi bi-search">search</button>
                    </form>
                </div>

                <h3 className="sidebar-title">Categories</h3>
                <div className="sidebar-item search-form">
                    <input  className="serch-input" type="text" name="q" placeholder="Company name" />
                    <input className="serch-input" type="text" name="q" placeholder="Position Title" />
                    <input className="serch-input" type="text" name="q" placeholder="Location" />
                    <input className="serch-input" type="text" name="q" placeholder="Posting date/hour" />
                    <input className="serch-input" type="text" name="q" placeholder="Salary" /><br />
                    <button type="submit" className="search-butom">search</button>
                </div>
            </div>
        </div>
    )
}

