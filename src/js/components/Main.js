import React, {Component} from 'react';
import {connect} from 'react-redux';

import store from "../store";
import { fetchTree } from "../actions/treeActions";
import { fetchMain } from '../actions/mainActions';


@connect ((store) => {
  return {
    data: store.main
  }
})

export default class Main extends Component {

  componentWillMount() {
    this.props.dispatch(fetchMain());
  }

  render() {
    let {type , content} = this.props;

    console.log(this.props);

    if(type == "group") {
      return (
        <Group/>
      )
    } else if(type == "product") {
      return (
        <Product/>
      )
    }

  }
}