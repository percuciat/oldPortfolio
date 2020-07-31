import React, {Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import Preloader from "./components/Preloader/Preloader";
import {BrowserRouter} from "react-router-dom";

import "./style/main.scss";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {faHome, faAddressCard, faImages} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faHome, faAddressCard, faImages);

const App = lazy(() => import('./components/App'));

ReactDOM.render(
    <>
        <BrowserRouter>
            <Suspense fallback={<Preloader/>}>
                <App />
            </Suspense>
        </BrowserRouter>
    </>,
document.getElementById('app')
);
