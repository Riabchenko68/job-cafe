import React from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import './navigation-button.css';

export default function NavigationButton ({ goToPage, totalPages, pageNumber }) {


    const handleChange = ( event, value ) => {
        goToPage(value - 1);
    }
   
    return (
        <div className="jobs-pagination">
            <Stack spacing={2}>
                <Pagination
                    count={totalPages}  
                    page={ pageNumber + 1 }
                    onChange={handleChange}
                    size="large"
                />
            </Stack>
        </div>
    )
}

