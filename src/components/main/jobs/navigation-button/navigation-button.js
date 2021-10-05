import React from "react";

import './navigation-button.css';

export default function NavigationButton ({ goToNextPage, pageNumber, goToPreviousPage }) {

    return (
        <div className="jobs-pagination">
            <ul className="">
                <li onClick={goToPreviousPage}>Previous</li>
                <li className="active">{pageNumber}</li>
                <li onClick={goToNextPage}>Next</li>
            </ul>
        </div>
    )
}
