import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Layout from "./components/Layout";
import store from "./store";

console.log (store.getState());
const app = document.getElementById("app")
ReactDOM.render(<Provider store={store}><Layout /></Provider>, app);


