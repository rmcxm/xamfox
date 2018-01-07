import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';


import { store } from 'AuthStore';
import { App } from 'App';

// setup fake backend
import { configureFakeBackend } from 'AuthBackend';
configureFakeBackend();
console.log({store}.length);

render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('app')
);
