import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import mcnReduce from './Reducers/reducers'
let store = createStore(mcnReduce)


// pass the store to the app
ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
                document.getElementById('root'));




registerServiceWorker();
