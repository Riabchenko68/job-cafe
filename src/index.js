import React from "react";
import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
//import * as serviceWorker from "./serviceWorker";

import App from './components/app';

reactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
     document.getElementById('root')
);

//serviceWorker.unregister();