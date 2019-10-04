import React from "react";

import Photo from "./analytics.svg";
import Button from "../Button/Button";
export default function ProductListItem({ product }) {
  return (
    <div className="productlist-item">
      <div className="productlist-item--top">
        <img src={Photo} alt="title" />
        <div className="productlist-item--top-right">
          <h4>{product.name}</h4>
          <div>from ${product.price}</div>
        </div>
      </div>
      <p>
        Typically 450-400 words, an ebook is perfect for your target audience
        ranging from prospective customers to users .
      </p>
      <Button content="Order" />
    </div>
  );
}
