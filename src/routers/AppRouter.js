import React from 'react';
import AddExpensePage from '../components/AddExpensePage'
import createHistory from 'history/createBrowserHistory';
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'
import LoginPage from '../components/LoginPage'

import {Router, Route, Switch, Link, NavLink} from 'react-router-dom'

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
        <Header />
        <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/dashboard" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
    </Switch>
    </div>
</Router>
);

export default AppRouter;

