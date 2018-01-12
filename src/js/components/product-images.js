import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'




class RootImage extends Component {   
  constructor(props) {
    super(props);
    this.state = null;
  }
  componentWillMount() {   
    this.setState({state: this.props.data});
   
    imageStore.subscribe(() =>
      this.setState(imageStore.getState())
    ) 
  }    


  render() { 
    var firstImage = this.props.data.filter(o => {return o.active == true})[0].image;
    return (

      <React.Fragment>
      <div className="d-flex flex-wrap">
        <img className="img-fluid mx-auto" src={firstImage} data-big-image={firstImage} />
      </div>

      <div className="d-flex flex-wrap">
        <ul className="list-unstyled d-flex flex-wrap mt-4">
          {this.props.data.map((o,i) => <ImageElement key={i} index={i} data={o} />)}
        </ul>
      </div>

      </React.Fragment>
    );
  }    
   
}


class ImageElement extends Component {
  handleImageChangeChild(index) {
    imageStore.dispatch({type: 'ACTIVE' , payload: index});
  }

  render() {
    return (
      <li>
        <img src={this.props.data.image} className="img-fluid thumb-img" onClick={() => this.handleImageChangeChild(this.props.index)}/>
      </li>
    );
  }
}


const imageNode = document.getElementById("images");
const imgData = [
  {
    active: true,
    image: "/src/img/img_01.jpg"
  },
  {
    active: false,
    image: "/src/img/img_02.jpg"
  }
]


function images(state = imgData, {type,payload}) {  
 
  const makeActive = (index) => {
    
    let output = state.reduce((result, value, key) => {      
      if(key === index) {
        value.active = true;        
      } else {
        value.active = false;
      }
      result = [...result , value];
      return result;
    },[]);

    return output;
  }


  switch (type) {

  case 'ACTIVE':
    return makeActive(payload);
  default:
    return state
  }
}
let imageStore = createStore(images);
// imageStore.subscribe(() =>
// console.log(imageStore.getState())
// )
ReactDOM.render(
  <RootImage data={imgData} />, imageNode
);