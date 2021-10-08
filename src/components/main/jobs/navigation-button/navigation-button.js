import React from "react";

import './navigation-button.css';

export default function NavigationButton ({ goToNextPage, pageNumber, goToPreviousPage, totalPages, error }) {

    const previousPage = pageNumber === 1 || error ? "li-jobs-pagination hidden" : "li-jobs-pagination";
    const nextPage = pageNumber === totalPages || error ? "li-jobs-pagination hidden" : "li-jobs-pagination";

    return (
        <div className="jobs-pagination">
            <ul>
                <li className={previousPage} onClick={goToPreviousPage}>Previous</li>
                <li className="active">{pageNumber}</li>
                <li className={nextPage} onClick={goToNextPage}>Next</li>
            </ul>
        </div>
    )
}
