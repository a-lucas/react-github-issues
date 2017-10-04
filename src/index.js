import { render } from 'react-dom'
import React from 'react';
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import {pageReducer} from './reducer'


const reducers = combineReducers({
	pageReducer
});

import Page from './components/page';

const store = createStore(pageReducer);

console.log('STORE = ', store);

render(
	<Provider store={store}>
		<Page />
	</Provider>,
	document.getElementById('root')
);