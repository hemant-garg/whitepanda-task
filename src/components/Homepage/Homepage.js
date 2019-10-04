import React, { Component } from "react";
import Button from "../Button/Button";

import "./Homepage.scss";
import ProductList from "../ProductList/ProductList";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="homepage-headline">Content Store</div>

        <div className="homepage-intro">
          <h3>
            Get bulk orders or almost similar orders ? Fill the order brief in
            an excel sheet
          </h3>
          <p>
            If you're wondering about an easy way to place orders in large
            numbers, we provide a way customized just for that. Download our
            excel sheet, and fill the order brief in the precribed format and
            submit. In case you need any help, we are just a click away to
            assist you in placing your order.
          </p>

          <Button content="Order via Excel Sheet" />
        </div>

        <ProductList list={LIST1} />
        <ProductList list={LIST2} />
      </div>
    );
  }
}

const LIST1 = [
  {
    name: "Blog / Article",
    price: 500
  },
  {
    name: "Newsletter / E-mailer",
    price: 1000
  },
  {
    name: "Whitepaper",
    price: 2000
  },
  {
    name: "e-book",
    price: 1000
  },
  {
    name: "Report / Guide",
    price: 1000
  },
  {
    name: "Product Description",
    price: 600
  }
];

const LIST2 = [
  {
    name: "Website Content",
    price: 1000
  },
  {
    name: "Video Script",
    price: 1000
  },
  {
    name: "Company Profile / Brochure",
    price: 2000
  },
  {
    name: "Press Release",
    price: 2000
  }
];

export default Homepage;
