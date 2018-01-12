import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'




class ProductListTable extends Component {   
  constructor(props) {
    super(props);
    this.state = {
      initialData: [],
      filteredData: [],
      header: []
    };
  }
  componentWillMount() {   
    
    let newState = {
      ...this.state,
      initialData: this.props.data,
      filteredData: this.props.data,
      header: this.props.header
    }

    this.setState({initialData: this.props.data});
    this.setState({filteredData: this.props.data});
    this.setState({header: this.props.header});
  }  

  filterBy(value) {
    // return filtered dataset
    let newState = this.state.filteredData;

    let newHeader = this.state.header.reduce((result,val,key) => {
      
      val.filterASC = !val.filterASC;
      if(val.value === value) {
        if(val.filtered === false) {
          val.filtered = true;
        }
      } else {
        val.filtered = false;
        val.filterASC = false;
      }

      result = [...result,val];
      return result;
    },[]);


    let currentFilterOrderASC = newHeader.filter((o) => {return o.filteredASC})[0].filterASC;

    if(currentFilterOrderASC) {
      
    } else {

    }

    
    this.setState({
      filteredData: newState
    });
    this.setState({header: newHeader});
  }
  
  renderHeaderTable({label,value}, index) {
    return (
      <th key={index}>{label} <button onClick={() => this.filterBy(value)}>Sort</button></th>
    )
  }


  render() { 
    return (

      <React.Fragment>
 

      <table className="table">
        <thead>
          <tr>
            {this.state.header.map((o , i) => this.renderHeaderTable(o,i))}
          </tr>
        </thead>
        <tbody>
          {this.state.filteredData.map((o,i) => <TableElement key={i} index={i} data={o} />)}
        </tbody>
      </table>

      </React.Fragment>
    );
  }    
   
}




class TableElement extends Component {


  render() {
    return (
      <tr>
        <td>{this.props.data.part}</td>
        <td>{this.props.data.description}</td>
        <td>{this.props.data.vendor}</td>
        <td>{this.props.data.uom}</td>
        <td>{this.props.data.currentPrice}</td>
      </tr>
      
    );
  }
}


const tableNode = document.getElementById("productListTable");
const headerTableData = [
  {
    label: "Part #",
    value: "part",
    filtered: false,
    filterASC: false
  },
  {
    label: "Description #",
    value: "description",
    filtered: false,
    filterASC: false
  },
  {
    label: "Vendor #",
    value: "vendor",
    filtered: false,
    filterASC: false
  },
  {
    label: "UOM #",
    value: "uom",
    filtered: false,
    filterASC: false
  },
  {
    label: "Current Price #",
    value: "currentPrice",
    filtered: false,
    filterASC: false
  }
];
const tableData = [
  {
    part: "144628-03-700",
    description: "Retaining Clip-Back",
    vendor: "9674000B-05",
    uom: "EA",
    currentPrice: 29.99,
    currency: "$",
    isFavorite: false,
    addToFavorite: "/add-to-favorite?part=144628-03-700",
    removeFromFavorite: "/remove-from-favorite?part=144628-03-700",
    addToCart: "/add-to-cart??part=144628-03-700"
  },
  {
    part: "144628-03-701",
    description: "Screw Cap-Back",
    vendor: "9674000B-06",
    uom: "EA",
    currentPrice: 32.32,
    currency: "$",
    isFavorite: false,
    addToFavorite: "/add-to-favorite?part=144628-03-701",
    removeFromFavorite: "/remove-from-favorite?part=144628-03-701",
    addToCart: "/add-to-cart??part=144628-03-701"
  },
  {
    part: "144628-03-702",
    description: "Shade Pull-Back",
    vendor: "9674000B-09",
    uom: "EA",
    currentPrice: 29.99,
    currency: "$",
    isFavorite: false,
    addToFavorite: "/add-to-favorite?part=144628-03-700",
    removeFromFavorite: "/remove-from-favorite?part=144628-03-700",
    addToCart: "/add-to-cart??part=144628-03-700"
  }
]



ReactDOM.render(
  <ProductListTable data={tableData} header={headerTableData}/>, tableNode
);