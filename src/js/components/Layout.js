import React, {Component} from 'react';

import Tree from "./Tree";
import Main from "./Main";

import store from "../store";
import {connect} from 'react-redux';

import "../../sass/main.sass";

@connect ((store) => {
  return {
    data: store
  }
})


export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="tree" className="col-sm-3"><Tree data={this.props.data.tree.tree} /></div>
        <div id="main" className="col-sm-9"><Main data={this.props.data.tree.main}/></div>        
      </React.Fragment>
    );
  }
}