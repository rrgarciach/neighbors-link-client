import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/home/HomePage';
import MemosPage from './components/memos/MemosPage';
// import NotFoundPage from './components/notfound/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="memos" component={MemosPage}/>
    <Route path="*" component={HomePage}/>
  </Route>
);
