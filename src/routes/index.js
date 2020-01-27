import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Image from '../pages/Image';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Main} />
            <Route path={process.env.PUBLIC_URL + "/image/:id"} component={Image} />
        </Switch>
    </BrowserRouter>
)

export default Routes;