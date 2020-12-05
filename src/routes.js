import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from "./views/Home/index";
import Login from "./views/Login/index";
import Error from "./views/Error/index";

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path = "/login" component = {Login}/>
                <Route exact path = "/" component = {Home}/>
                <Route exact path = "/moviesList/" component = {MoviesList}/>
                <Route exact path = "/moviesList/:id" component = {Movie}/>
                <Route path = "*" component = {Error}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;