import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'




class Tree extends Component {   
  constructor(props) {
    super(props);
    this.state = null;
  }
  componentWillMount() {   
    this.setState({state: this.props.data});
    store.subscribe(() =>
      this.setState(store.getState())
    ) 
  }    
  render() { 
    console.log("state",this.state);
    return (
      <ul>
          {this.props.data.map((o,i) => <TreeElement key={i} data={o} />)}
      </ul>
    );
  }    
   
}

class TreeElement extends Component {  
  handleChildrenContainer({id,status,children}) {    
    if (status === "open" && children.length > 0) {
      let newState = store.dispatch({ type: 'CLOSE', id: id });
    } else if (status === "closed" && children.length > 0) {
      let newState = store.dispatch({ type: 'OPEN', id: id });
    }   
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


const treeNode = document.getElementById("tree");
const treeDataset = [
  {"title": "1",
  "id": 0,
   "status": "closed",
   "children": [
     {"title": "1",
     "id": 12,
     "children": [],
     "status": "closed",
      },
     {"title": "1",
     "id": 13,
     "children": [],
     "status": "closed",
    },
     {"title": "1",
     "id": 14,
     "children": [],
     "status": "closed",
    }
   ]
  },
  {"title": "2",
    "id": 1,
    "children": [],
    "status": "closed",
  },
  {"title": "3",
  "id": 2,
  "children": [],
  "status": "closed",
  }
]
function counter(state = treeDataset, {type,id}) {  
  const openTree = (data,id) => {
    let output = data.reduce((result, value, key) => {
      if (value.id === id) {
        value.status = "open";
      }
      result =  [...result,value];
      return result;
    },[]);
    return output;
  }
  const closeTree = (data,id) => {
    let output = data.reduce((result, value, key) => {
      if (value.id === id) {
        value.status = "closed";
      }
      result =  [...result,value];
      return result;
    },[]);
    return output;
  }
  switch (type) {
  case 'OPEN':
    return openTree(state,id);
  case 'CLOSE':
    return closeTree(state,id);
  default:
    return state
  }
}
let store = createStore(counter);
store.subscribe(() =>
console.log(store.getState())
)
ReactDOM.render(
  <Tree data={treeDataset} />, treeNode
);