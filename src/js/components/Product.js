import React, {Component} from 'react';
import {Tabs} from 'react-bootstrap';
import {Tab} from 'react-bootstrap';
import Slider from 'react-slick';


import ProductImage from "./ProductImage";
import VariantsContainer from "./variants";
import RelatedProductsSlider from "./RelatedProductsSlider";
import Quantity from "./Quantity";

export default class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      availableOptions: [],
      variantId: props.data.variantId,
      quantity: 1,
      stock: props.data.stock
    };
  }


  componentDidUpdate() {

  }

  componentWillMount() {    
   
    this.setState({ variantId: this.props.data.variantId.split(".")});

    let {variants, variantId, options} = this.props.data;

    let variantsArray = Array.from(new Set(variants.map(item => item.id.split(".")).reduce((result , value) => result.concat(value)).sort()));
    // console.log(variantsArray)


    let variantsOptions = options.reduce((result , option) => {
      // update option values based on flatten available combinations array
      option.values = option.values.reduce((result2 , option2) => {
        if(variantsArray.includes(option2.value)) {
          result2 = [...result2, option2];  
        } 
        return result2;
      },[]);
      
      result = [...result,option];
      
      return result;
    },[]);

    // console.log(variantsOptions);

    let variantsCombinations = variants.reduce((result , option) => {
      result = [...result, option.id];

      return result;
    },[]);

    this.setState({availableOptions: variantsCombinations});

  }  


 
  createMarkup(arg) {
    return {__html: arg};
  }

  changeVariant(value , index) {
    // console.log(value , index); 

    let variantId = this.state.variantId.reduce((result, val , key) => {
      if(key == index) {
        val = value;
      }

      return [...result , val];
    },[]);

    

    this.setState({variantId});

    console.log("variant Id: " , variantId)

    const getFilteredOptions = (variants,variantId) => {
      return variantId.filter(x=>x!==null).reduce((r,v,k)=>{ return [...r,variantId.slice(0,k+1).join(".")]  },[]).reduce((r,v,k)=>{return [...r,variants.filter(y=>y.id.includes(v)).reduce((r2,v2,k2)=>{return [...r2,v2.id.split(".")]},[])]},[]).reduce((r3,v3,k3)=>{return [...r3,v3.reduce((r4,v4,k4)=>{return [...r4,...v4]},[])]},[]).map((a,i)=> {return (([...new Set(a)]).sort()).filter(f=>{return getIndex(f) == i+1})});
    }

    const getIndex = (option) => {  
      return option !== "" ? this.props.data.variants.filter(x=>x.id.split(".").includes(option))[0].id.split(".").indexOf(option) : null;
    };
  
  

    let outputOptions = getFilteredOptions(this.props.data.variants , variantId);

    console.log("filtered options: " , outputOptions);


    // if(variantId.includes(null) || variantId.includes("")) {
    //   console.log("bad");
    // } else {
    //   console.log("filter variant combinations");
    // }

  }

  render() {
    return (
      <div id="product" className="d-flex flex-wrap">
        <div className="image-container col-sm-6">
          <ProductImage data={this.props.data.images} />
        </div>
        <div className="product-container col-sm-6">
          <h2 className="h2">{this.props.data.title}</h2>
          <div dangerouslySetInnerHTML={this.createMarkup(this.props.data.summary)}></div>
          <p className="product-number">Item #: {this.props.data.productNumber}</p>
          <p className="price">{this.props.data.currency}{this.props.data.price}</p>
          <div className="options-container">
            <VariantsContainer handleChangeVariant={(value , index) => this.changeVariant(value , index)} data={this.props.data.options} combinations={this.state.availableOptions} variantId={this.state.variantId}/>


            <div className="stock-and-quantity mt-4">
                    <div className="stock-placeholder d-flex flex-wrap">
                        <p>Stock : {this.state.stock}</p>
                    </div>

                    <div className="quantity-placeholder d-flex flex-wrap">
                        <p className="mr-2">Quantity </p>
                        <Quantity stock={this.state.stock} value={this.state.quantity} name="Quantity"/>
                    </div>
            </div>
          </div>
        </div>
        <div className="product-tabs-container col-sm-12 mt-4">
            <Tabs defaultActiveKey={0} id="product-tabs">
              {this.props.data.tabs.map((o,i) => {
                  return <Tab key={i} eventKey={i} title={o.label} dangerouslySetInnerHTML={this.createMarkup(o.content)}></Tab>
              })}
            </Tabs>
        </div>
        <div className="related-products-container col-sm-12 mt-4">
            <h1 className="mb-4">Related Products</h1>
            <RelatedProductsSlider data={this.props.data.relatedProducts}/>
        </div> 
      </div>
    );
  }
}

