import React from "react";
import { Route, Switch } from 'react-router-dom';

import Footer from "../footer/footer";
import Header from "../header/header/header";
import Main from "../main/main/main";
import JobPage from "../main/jobs/job-page";
import About from "../main/about/about";
import ContactUs from "../main/contact-us/contact-us";
import Registration from "../main/autorisation/registration";
import Login from "../main/autorisation/login";
import Profile from "../main/autorisation/profile";

import 'bootstrap/dist/css/bootstrap.css';
import './boxicons.css';
import './app.css';

export default function App () {

    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/about" exact component={About} />
                <Route path="/job-page" exact component={JobPage}/>
                <Route path="/contact-us" exact component={ContactUs} />
                <Route path="/registration" exact component={Registration} />
                <Route path="/login" exact component={Login} />
                <Route exact path="/profile" component={Profile} />
                <Route render={() => {
                    return (
                        <section className="breadcrumbs">
                            <div className="container">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h2>Page not found</h2>
                                </div>
                            </div>
                        </section> 
                    )}}
                />
            </Switch>
            <Footer />
        </div>
    )  
}
