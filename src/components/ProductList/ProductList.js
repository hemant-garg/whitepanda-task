import React, { Component } from "react";

import "./ProductList.scss";
import ProductListItem from "./ProductListItem";

class ProductList extends Component {
  render() {
    let renderList = this.props.list.map(product => (
      <ProductListItem key={product.name} product={product} />
    ));
    return <div className="productlist">{renderList}</div>;
  }
}
export default ProductList;
