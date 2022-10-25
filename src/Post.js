import React, { useEffect, useState } from "react";
import { productList, lowHigh, highLow } from "./actions/action";
import { useDispatch, useSelector } from "react-redux";
import "./Box.css";
import Box from "./Box";

const Post = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productList());
  }, []);

  const [re, up] = useState(true);
  function low(value) {
    if (value == 1) {
      console.log("LOW");
      dispatch(lowHigh());
      up(true);
    } else if (value == 2) {
      console.log("High");
      dispatch(highLow());
      up(false);
    }
  }

  const postData = useSelector((state) => state);
  const Data = postData.postsReducer.item;
  console.log(Data);
  return (
    <>
      <div class="modal-container" id="modal_container">
        <div class="modal">
          <h1 class="heading" id="head">
            This is a HEading
          </h1>
          <img id="addImg" alt="This is ima" />
          <p id="content"></p>
          <button id="close">Close Me</button>
        </div>
      </div>
      <label for="kuDropSortBy">Sort By: </label>
      <select id="kuDropSortBy" onChange={(e) => low(e.target.value)}>
        <option value="0">Select Option</option>
        <option value="1">Price Low to High</option>
        <option value="2">Price High to Low</option>
      </select>
      <label for="">Total results found: -- {Data.length}</label>
      <ul class="kuvmResultsList" id="allBagsData">
        {Data.map((el) => {
          return (
            <Box
              src={el.imageUrl}
              alt={el.name}
              sku={el.sku}
              salePrice={el.salePrice}
              id={el.id}
              name={el.name}
              color={el.color}
              type={el.type}
              inStock={el.inStock}
              brand={el.brand}
              size={el.size}
              shortDesc={el.shortDesc}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Post;
