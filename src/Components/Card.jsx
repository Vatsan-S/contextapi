import React from "react";
import { useContext, useState, useEffect } from "react";
import { ProductList } from "./Context";

const Card = ({ index }) => {
  const [btnName, setBtnName] = useState(true);
  const [disp, setDisp] = useState(false);
  const [count, setCount] = useState(0);
  const [price, setPrice]= useState(0);

  const [ele, finalCount, setFinalCount, finalPrice, setFinalPrice] = useContext(ProductList);

  // handle click
  const handleClick = () => {
    setBtnName(!btnName);
    setDisp(!disp);

    btnName ? setCount(1) : setCount(0);
    btnName? setPrice(ele.price) : setPrice(0)
  };

  // handle change
  const handleChange = (value) => {
    setCount(value);
  };

  // set total useEffect
  useEffect(() => {
    let updatedCount = [...finalCount];
    let updatedPrice = [...finalPrice];
    updatedCount[index] = count;
    updatedPrice[index] = count * ele.price;
    setFinalPrice(updatedPrice)
    setFinalCount(updatedCount);
  }, [count]);

  // jsx
  return (
    <div className="wrapper col-12 col-sm-6 col-md-4 col-lg-3" >
      <div className="card">
        <div className="cardImage">
          <img src={ele.thumbnail} alt="" />
        </div>
        <div className="content">
          <div className="top-content">
            <h4>{ele.title}</h4>
            <p>{ele.description}</p>
          </div>
          <div className="bottom-content">
            <p className="price">${ele.price}</p>
            <div className="quantity">
              <div className={disp ? "counter" : "counter none"}>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  // defaultValue={1}
                  value={count}
                  min="1"
                  max={ele.stock}
                  onChange={(e) => {
                    handleChange(e.target.value);
                  }}
                />
              </div>
              <button
                className="addToCart btn btn-success"
                onClick={handleClick}
              >
                {btnName ? "Add to Cart" : "Remove"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
