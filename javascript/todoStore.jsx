import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from 'todoReducers.jsx';

let store = createStore(reducer);