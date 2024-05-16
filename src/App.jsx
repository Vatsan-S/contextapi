import React, { createContext, useEffect, useState } from "react";
import { ProductList } from "./Components/Context";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

const App = () => {
  const productList = {
    products: [
      {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcQ2G9L6p5VoWlG_Ibu14WwZVAn1-sRZpaWYHHdCv6yGAQC7lJwtlwpK3b511N5zXT4M0&usqp=CAU",
        images: [
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        ],
      },
      {
        id: 2,
        title: "iPhone X",
        description:
          "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: "Apple",
        category: "smartphones",
        thumbnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKiav9gtQ2OaE5y5kOBvi1m9t6nQDLIPGXhNaTa5n0HQ&s",
        images: [
          "https://i.dummyjson.com/data/products/2/1.jpg",
          "https://i.dummyjson.com/data/products/2/2.jpg",
          "https://i.dummyjson.com/data/products/2/3.jpg",
          "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        ],
      },
      {
        id: 3,
        title: "Samsung Universe 9",
        description:
          "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: "Samsung",
        category: "smartphones",
        thumbnail:
          "https://cdn.wccftech.com/wp-content/uploads/2018/01/Galaxy-Note-8-9.jpg",
        images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
      },
      {
        id: 4,
        title: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3,
        stock: 123,
        brand: "OPPO",
        category: "smartphones",
        thumbnail:
          "https://i.gadgets360cdn.com/large/oppo_f19_pro_plus_5g_review_cover_1620986360059.jpg",
        images: [
          "https://i.dummyjson.com/data/products/4/1.jpg",
          "https://i.dummyjson.com/data/products/4/2.jpg",
          "https://i.dummyjson.com/data/products/4/3.jpg",
          "https://i.dummyjson.com/data/products/4/4.jpg",
          "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        ],
      },
      {
        id: 5,
        title: "Huawei P30",
        description:
          "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09,
        stock: 32,
        brand: "Huawei",
        category: "smartphones",
        thumbnail:
          "https://cdn.mos.cms.futurecdn.net/WKpWgNcj6M4Bf5VcoCm7nn.jpg",
        images: [
          "https://i.dummyjson.com/data/products/5/1.jpg",
          "https://i.dummyjson.com/data/products/5/2.jpg",
          "https://i.dummyjson.com/data/products/5/3.jpg",
        ],
      },
    ],
  };

  let productLength = productList.products.length;
  let productEmptyArray = Array(productLength).fill(0);

  const [finalCount, setFinalCount] = useState(productEmptyArray);
  const [finalPrice, setFinalPrice] = useState(productEmptyArray);

 

  const totalCount = finalCount.map(Number).reduce((total, num) => {
    return total + num;
  });

  const totalPrice = finalPrice.reduce((total, num)=>{return total + num})

  return (
    <div>
      <header className="header">
        <div className="navContainer">
          <div className="logo">Western ghats</div>
          <button className="cart btn btn-primary">
            Cart <span className="cartSpan">{totalCount}</span>
          </button>
        </div>
      </header>
      <div className="cardContainer">
        {productList.products.map((ele, index) => {
          return (
            <ProductList.Provider key={ele.id} value={[ele, finalCount, setFinalCount, finalPrice, setFinalPrice]}>
              <Card index={index} />
            </ProductList.Provider>
          );
        })}
      </div>
      <ProductList.Provider value={[productList, totalCount, totalPrice]}>
        <Footer />
      </ProductList.Provider>
    </div>
  );
};

export default App;
