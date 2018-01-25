import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';



export default class VariantsContainer extends Component {   
    constructor(props) {
      super(props);
    }
    
    render() { 
        return (
          <React.Fragment>
            {this.props.data.map((o , i) => 
            
              <div key={i} className="variantWrapper">  
                <label>{o.label}</label> 
                <select className="form-control" onChange={(e) => this.props.handleChangeVariant(e.currentTarget.value,i)}>
                  {o.values.map((option , indx) => <option value={option.value} key={indx}>{option.label}</option>)}
                </select>
              </div>
            )}
          </React.Fragment>
        );
      }     
     
}

