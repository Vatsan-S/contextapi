import React from "react";

import { useContext } from "react";
import { ProductList } from "./Context";

const Footer = () => {
  let totalQty = 0;
  const [totalCount, totalPrice] = useContext(ProductList);

  return (
    <div className="footer">
      <div className="footerContainer">
        <p className="footerPara">Total Qty: {totalCount}</p>
        <p className="footerPara">Total Price: {totalPrice}</p>
      </div>
    </div>
  );
};

export default Footer;
