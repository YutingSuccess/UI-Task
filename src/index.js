import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './root.reducer';
import ReduxPromise from 'redux-promise';
import Employees from './Employees';
import Posts from './Posts';
import EditEmployees from './EditEmployees';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path='/employees' component={Employees} />
                    <Route path='/Posts' component={Posts} />
                    {/*<Route path = '/AddEmployees' component={AddEmployees}/>*/}
                    <Route path = '/EditEmployees' component={EditEmployees}/>
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
