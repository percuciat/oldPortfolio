import React from "react";
import {Switch, Route} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Works from "./Works";



const Main =  () => (
    <main className="main">
        <Switch>
            <Route exact path="/" component={About} />
            <Route path="/works" component={Works} />
            <Route path="/contact" component={Contact} />
        </Switch>
    </main>
);


export default Main;
