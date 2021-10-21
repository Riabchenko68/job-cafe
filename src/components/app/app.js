import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from "../footer/footer";
import Header from "../header/header/header";
import Main from "../main/main/main";
import JobPage from "../main/jobs/job-page";
import About from "../main/about/about";
import ContactUs from "../main/contact-us";

import 'bootstrap/dist/css/bootstrap.css';
import './boxicons.css';
import '../animate/animate.css';
import '../animate/animate.compat.css';
import '../animate/animate.min.css';
import './app.css';

export default function App () {

    return (
        <div>
            <Router>
                <Header />
                <Route path="/" exact component={Main} />
                <Route path="/about" exact component={About} />
                <Route path="/job-page" exact component={JobPage} />
                <Route path="/contact-us" exact component={ContactUs}/>
                <Footer />
            </Router>
        </div>
    )  
}