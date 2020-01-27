import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Image from '../pages/Image';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/image/:id" component={Image} />
        </Switch>
    </BrowserRouter>
)

export default Routes;