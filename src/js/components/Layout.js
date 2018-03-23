import React, {Component} from 'react';

import Tree from "./Tree";
import Main from "./Main";
import Breadcrumbs from "./Breadcrumbs";

import store from "../store";
import {connect} from 'react-redux';

import "../../sass/main.sass";

@connect ((store) => {
  return {
    data: store,
    breadcrumbs: store.tree.breadcrumbs
  }
})


export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="tree" className="col-sm-3"><Tree data={this.props.data.tree.tree} /></div>
        <div className="col-sm-12">
          <div id="breadcrumbs" className="col-sm-12"><Breadcrumbs data={this.props.breadcrumbs}/></div>
          <div id="main" className="col-sm-12"><Main data={this.props.data.tree.main}/></div>  
        </div>
      </React.Fragment>
    );
  }
}