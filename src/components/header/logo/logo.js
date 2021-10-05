import React from "react";
import { Link } from 'react-router-dom';

import './logo.css';

function Logo () {
    return (
        <div className="logo">
            <h1 className="text-light"><Link to='/'><span>Job Cafe</span></Link></h1>
            <img src="assets/img/logo.png" alt="" className="img-fluid" />
        </div>
    )
}

export default Logo;