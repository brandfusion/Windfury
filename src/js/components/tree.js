import React, {Component} from 'react';
import {connect} from 'react-redux';

import store from "../store";
import { fetchTree , markNodeOpen } from "../actions/treeActions";

@connect ((store) => {
  return {
    data: store.tree
  }
})
export default class Tree extends Component {     
  componentWillMount() {
    this.props.dispatch(fetchTree());
  }    
  
  render() {     
    let { data } = this.props;  
    let children = [];
    if(data.children != undefined) children = data.children;
    console.log("Tree component data: " , data); 
    return (      
      <ul>
          {children.map((o,i) => <TreeElement key={i} data={o} />)}
      </ul>
    );
  }    
   
}

class TreeElement extends Component {  
  handleChildrenContainer(obj) {
    console.log(obj , obj.id);    
    this.dispatch(markNodeOpen(obj , obj.id));
  }
  render() {   
    let childrenContainerVisibility = this.props.data.status === "open" ? "show" : "hidden";
    let iconClass = this.props.data.status === "open" ? "fa fa-minus" : "fa fa-plus";
    iconClass = this.props.data.children.length > 0 ? iconClass : "hidden";
    if(this.props.data.children.length > 0 ) {     
      return (
        <li>
          <button onClick={() => this.handleChildrenContainer(this.props.data)}><i className={iconClass}></i> {this.props.data.title}</button>
          <ul className={childrenContainerVisibility}>
            {this.props.data.children.map((o,i) => <TreeElement key={i} data={o} />)}
          </ul>
        </li>
      );
    } else {
      return (
        <li>
          <button onClick={() => this.handleChildrenContainer(this.props.data)}><i className={iconClass}></i> {this.props.data.title}</button>
        </li>
      );
    }
  }
}


class Childrens extends Component {
  render() {
    return (
      <React.Fragment>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </React.Fragment>
    );
  }
}
