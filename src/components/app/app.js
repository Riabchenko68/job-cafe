import React from "react";

import Footer from "../footer/footer";
import Header from "../header/header";
import Main from "../main/main";
import Section from "../section/section";

import './app.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App () {
    return (
        <div>
            <Header />
            <Section />
            <Main />
            <Footer />
        </div>
    )
}

export default App;

