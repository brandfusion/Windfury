import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Layout from "./components/Layout";
import store from "./store";


import treeDatasource from '../resources/treeDataset.json';
import mainDatasource from '../resources/mainDataset.json';



const app = document.getElementById("app");
ReactDOM.render(<Provider store={store}><Layout /></Provider>, app);




