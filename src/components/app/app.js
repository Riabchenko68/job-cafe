import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from "../footer/footer";
import Header from "../header/header/header";
import Main from "../main/main/main";
import JobPage from "../main/jobs/job-page";

import './app.css';
import 'bootstrap/dist/css/bootstrap.css';
import './boxicons.css';

export default function App () {

    return (
        <div>
            <Router>
                <Header />
                <Route path="/" exact component={Main} />
                <Route path="/job-page" exact component={JobPage} />
                <Footer />
            </Router>
        </div>
    )  
}