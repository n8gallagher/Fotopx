import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {HashRouter, Route } from 'react-router-dom'

// import configureStore from './store/store';
// import NewSessionContainer from './components/session/new_session_container';

// const Root = ({ store }) => (
//     <Provider store={store}>
//         <HashRouter>
//             {/* <Route path="/" component={NewSessionContainer} /> */}
//         </HashRouter>
//     </Provider>
// )

document.addEventListener('DOMContentLoaded', () => {
    // const store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<h1> Hello React</h1>)
})
