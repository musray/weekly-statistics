import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { Values } from 'redux-form-website-template';
import store from './store';
import FieldArraysForm from './FieldArraysForm';
import showResults from './showResults';

const rootEl = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <div>
            <h2>周报系统</h2>
            <FieldArraysForm onSubmit={showResults} />
        </div>
    </Provider>,
    rootEl
);


