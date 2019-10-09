import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import Recipe from './components/Recipes/Recipe';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/recipe/:id' component={Recipe} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
