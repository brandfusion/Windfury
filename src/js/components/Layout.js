import React, {Component} from 'react';

import Tree from "./Tree";
import Main from "./Main";



export default class Layout extends Component {  
  render() {
    return (
      <React.Fragment>
        <Tree />
        <Main />
      </React.Fragment>
    );
  }
}