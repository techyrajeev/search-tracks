import React                         from 'react';
import PropTypes                     from 'prop-types';
import { Provider }                  from 'react-redux';
import { IndexRoute, Router, Route } from 'react-router';
import Main                          from './components/main';
import SearchPage                    from './components/search/search-page';
import store, { history }            from './store/store';


const routes = (
    <Provider store={store}>
      <Router history={history}>
          <Route path="/" component={Main}>
                <Route path="search" component={SearchPage} />
          </Route>
      </Router>
    </Provider>
);

export default routes;
