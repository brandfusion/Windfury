import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';



export default class VariantsContainer extends Component {   
    constructor(props) {
      super(props);

      this.state = {
        data: this.props.data,
        variantId: this.props.variantId
      }
    }
    
    componentWillMount() {
      console.log("var options" , this.state.data);
      console.log("var combs" , this.props.combinations);
      console.log("var id" , this.state.variantId);



      // console.log(getFilteredOptions(this.props.variantId));
    }

    handleChangeVariant(value , index) {
      console.log(value , index);
      // this handler should update the variantId

      // this.props.variantId = this.props.variantId.reduce((result, val , key) => {
      //   if(key == index) {
      //     val = value;
      //   }
  
      //   return [...result , val];
      // },[]);

    }

    render() { 
        return (
          <React.Fragment>
            {this.props.data.map((o , i) => 
            
              <div key={i} className="variantWrapper">  
                <label>{o.label}</label> 
                <select data-index={i} className="form-control" onChange={(e) => this.handleChangeVariant(e.currentTarget.value,i)}>
                  
                  {o.values.map((option , indx) => <option value={option.value} key={indx}>{option.label}</option>)}
                </select>
              </div>
            )}
          </React.Fragment>
        );
      }     
     
}

