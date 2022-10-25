import { PRODUCT_LIST } from "../constants";
import store from "../store";

export const productList = () => {
  //console.log(allData);
  return {
    type: PRODUCT_LIST,
    data: "apple",
  };
};

export const lowHigh = () => {
  return {
    type: "LOW_HIGH_POSTS",
    payload: store.getState().postsReducer.item,
  };
};

export const highLow = () => {
  return {
    type: "HIGH_LOW_POSTS",
    payload: store.getState().postsReducer.item,
  };
};
