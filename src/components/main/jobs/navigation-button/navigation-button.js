import React from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import './navigation-button.css';

export default function NavigationButton ({ goToPage, totalPages, pageNumber}) {

    //const [page, setPage] = React.useState(0);

    const handleChange = ( event, value ) => {
        //setPage(value);
        goToPage(value);
    }
    //const previousPage = pageNumber === 1 || error ? "li-jobs-pagination hidden" : "li-jobs-pagination";
    //const nextPage = pageNumber === totalPages || error ? "li-jobs-pagination hidden" : "li-jobs-pagination";

    return (
        <div className="jobs-pagination">
            <Stack spacing={2}>
                <Pagination
                    count={totalPages}  
                    page={pageNumber}
                    onChange={handleChange}
                    size="large"
                />
            </Stack>
        </div>
    )
}

/*<div className="jobs-pagination">
                <ul>
                    <li className={previousPage} onClick={goToPreviousPage}>Previous</li>
                    <li className="active">{pageNumber}</li>
                    <li className={nextPage} onClick={goToNextPage}>Next</li>
                </ul>
            </div> */
