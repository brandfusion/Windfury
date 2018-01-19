import React, {Component} from 'react';

import store from "../store";
import { fetchTree , markNodeOpen, openDetail } from "../actions/treeActions";

const headerTableData = [
  {
    label: "Part #",
    value: "partId",
    filtered: false,
    filterASC: false
  },
  {
    label: "Description #",
    value: "title",
    filtered: false,
    filterASC: false
  },
  // {
  //   label: "Vendor #",
  //   value: "vendor",
  //   filtered: false,
  //   filterASC: false
  // },
  {
    label: "UOM #",
    value: "uom",
    filtered: false,
    filterASC: false
  },
  {
    label: "Current Price #",
    value: "price",
    filtered: false,
    filterASC: false
  },
  {
    label: "",
    value: null,
    filtered: null,
    filterASC: null
  }
]


export default class ProductListTable extends Component {   
  constructor(props) {
    super(props);
    this.state = {
      initialData: [],
      filteredData: [],
      header: headerTableData
    };
  }
  componentWillMount() {   
    
    let newState = {
      ...this.state,
      initialData: this.props.data,
      filteredData: this.props.data
    }

    this.setState({initialData: this.props.data});
    this.setState({filteredData: this.props.data});   
  }  

  toggleFavorite(id) {
    console.log("id",id);
    let newState= this.state.filteredData.reduce((result,value,key) => {
      if (value.productId == id) {
        if(value.isFavorite === true ) {
          alert("/removefromfavorites");
        } else {
          alert("/addtofavorites");
        }
        value.isFavorite = !value.isFavorite;
        
      }
      result = [...result, value];
      return result;
    },[]);

    console.log(newState);
    this.setState({filteredData: newState});
   
  }
  addToCart(url) {
    alert(url);
  }
  filterBy(value) {
    // return filtered dataset
    let newState = this.state.filteredData;
    let filterValue = value;

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

    console.log(newHeader);


    let currentFilterOrderASC = newHeader.filter((o) => {return o.filtered})[0].filterASC;

    if(currentFilterOrderASC) {
      this.state.filteredData.sort((a , b) => a[filterValue] > b[filterValue])
    } else {
      this.state.filteredData.sort((a , b) => a[filterValue] < b[filterValue])
    }

    
    this.setState({
      filteredData: newState
    });
    this.setState({header: newHeader});
  }
  
  renderHeaderTable({label,value}, index) {
    let caretClass = value === null ? "" : "fa fa-sort";
    return (
      <th key={index}>{label} <button onClick={() => this.filterBy(value)} className="sort"><i className={caretClass} aria-hidden="true"></i></button></th>
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
          {this.state.filteredData.map((o,i) => <TableElement toggleFavorite={(id)=>this.toggleFavorite(id)} addToCart={(url)=>this.addToCart(url)} key={i} index={i} data={o} />)}
        </tbody>
      </table>

      </React.Fragment>
    );
  }    
   
}




class TableElement extends Component { 

  render() {
    let favoriteClass= this.props.data.isFavorite ? "fa fa-heart" : "fa fa-heart-o";
    return (
      <tr>
        <td>{this.props.data.partId}</td>
        <td>{this.props.data.title}</td>
        <td>{this.props.data.uom}</td>
        <td>{this.props.data.price}</td>
        <td><div className="d-flex align-items-center"><button className="favorite" onClick={()=> this.props.toggleFavorite(this.props.data.productId)}><i className={favoriteClass}></i></button><button className="addToCart" onClick={()=> this.props.addToCart(this.props.data.addToCartLink)}><i className="fa fa-shopping-cart"></i></button></div></td>
      </tr>
      
    );
  }
}


// const tableNode = document.getElementById("productListTable");
// const headerTableData = [
//   {
//     label: "Part #",
//     value: "part",
//     filtered: false,
//     filterASC: false
//   },
//   {
//     label: "Description #",
//     value: "description",
//     filtered: false,
//     filterASC: false
//   },
//   {
//     label: "Vendor #",
//     value: "vendor",
//     filtered: false,
//     filterASC: false
//   },
//   {
//     label: "UOM #",
//     value: "uom",
//     filtered: false,
//     filterASC: false
//   },
//   {
//     label: "Current Price #",
//     value: "currentPrice",
//     filtered: false,
//     filterASC: false
//   }
// ];
// const tableData = [
//   {
//     part: "144628-03-701",
//     description: "Screw Cap-Back",
//     vendor: "9674000B-06",
//     uom: "EA",
//     currentPrice: 32.32,
//     currency: "$",
//     isFavorite: false,
//     addToFavorite: "/add-to-favorite?part=144628-03-701",
//     removeFromFavorite: "/remove-from-favorite?part=144628-03-701",
//     addToCart: "/add-to-cart??part=144628-03-701"
//   },
//   {
//     part: "144628-03-700",
//     description: "Retaining Clip-Back",
//     vendor: "9674000B-05",
//     uom: "EA",
//     currentPrice: 29.99,
//     currency: "$",
//     isFavorite: false,
//     addToFavorite: "/add-to-favorite?part=144628-03-700",
//     removeFromFavorite: "/remove-from-favorite?part=144628-03-700",
//     addToCart: "/add-to-cart??part=144628-03-700"
//   },
//   {
//     part: "144628-03-702",
//     description: "Shade Pull-Back",
//     vendor: "9674000B-09",
//     uom: "EA",
//     currentPrice: 29.99,
//     currency: "$",
//     isFavorite: false,
//     addToFavorite: "/add-to-favorite?part=144628-03-700",
//     removeFromFavorite: "/remove-from-favorite?part=144628-03-700",
//     addToCart: "/add-to-cart??part=144628-03-700"
//   }
// ]



// ReactDOM.render(
//   <ProductListTable data={tableData} header={headerTableData}/>, tableNode
// );