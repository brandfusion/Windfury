import React, {Component} from 'react';
import {connect} from 'react-redux';

import store from "../store";
import { fetchTree , markNodeOpen, openDetail } from "../actions/treeActions";

// @connect ((store) => {
//   return {
//     data: store.tree.tree
//   }
// })
export default class Tree extends Component {     
  componentWillMount() {
    if(!Object.keys(this.props.data).length) {
      store.dispatch(fetchTree());
    }
    
  }   
  render() {     
    let { data } = this.props;  
    let children = [];
    if(data.children != undefined) children = data.children;
    // console.log("Tree component data: " , data); 
    return (      
      <ul>
          {children.map((o,i) => <TreeElement  key={i} data={o} />)}
      </ul>
    );
  }    
   
}

class TreeElement extends Component {  
  // handleChildrenContainer(obj) {    
  //   this.props.dispatch(markNodeOpen(obj , obj.id));
  // }
  handleChildrenContainer(id) {    
    store.dispatch(markNodeOpen(id));
  }
  loadGroup(id) {
    store.dispatch(openDetail(id));
  }
  render() {   
    // console.log("PROPS: " , this.props.data.open);
    let childrenContainerVisibility = this.props.data.open ? "show" : "hidden";
    let iconClass = this.props.data.open ? "fa fa-minus" : "fa fa-plus";
    let iconVisibility = this.props.data.children.length > 0 ? "icon" : "hidden";
    // console.log("children class: ", this.props.data.children.length);
    if(this.props.data.children.length > 0 ) {     
      return (
        <li>
          <button onClick={() => this.handleChildrenContainer(this.props.data.id)} className={iconVisibility}><i className={iconClass}></i></button>  <button onClick={() => this.loadGroup(this.props.data.id)} className="link">{this.props.data.title}</button>
          <ul className={childrenContainerVisibility}>
            {this.props.data.children.map((o,i) => <TreeElement  key={i} data={o} />)}
          </ul>
        </li>
      );
    } else {
      return (
        <li>
          <button onClick={() => this.handleChildrenContainer(this.props.data.id)} className={iconVisibility}><i className={iconClass}></i></button>  <button onClick={() => this.loadGroup(this.props.data.id)} className="link">{this.props.data.title}</button>
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
