import React, {Component} from 'react';

import Tree from "./Tree";
import Main from "./Main";

import store from "../store";
import {connect} from 'react-redux';

@connect ((store) => {
  return {
    data: store
  }
})


export default class Layout extends Component {  
  componentDidUpdate() {
    console.log("LAYOUT",this.props);
  }
  render() {
    return (
      <React.Fragment>
        <Tree data={this.props.data.tree.tree} />
        <Main data={this.props.data.main}/>
      </React.Fragment>
    );
  }
}