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
      step: 3,
      stock: props.data.stock
    };
  }

  componentWillMount() {   
    this.setState({ variantId: this.props.data.variantId.split(".")});
    this.setState({availableOptions: this.props.data.variants});
  }   
  createMarkup(arg) {
    return {__html: arg};
  }  
  changeVariant(value) {
    this.setState({variantId: value});
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
            <VariantsContainer changeVariant={(value) => this.changeVariant(value)} data={this.props.data.options} combinations={this.state.availableOptions} variantId={this.state.variantId}/>


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

