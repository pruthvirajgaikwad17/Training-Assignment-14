import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_DATA } from "./constants";
import Axios from "axios";

function* getProducts() {
  yield Axios.post("https://eucs23v2.ksearchnet.com/cs/v2/search", {
    context: { apiKeys: ["klevu-160320037354512854"] },
    recordQueries: [
      {
        id: "configLayoutProducts564",
        typeOfRequest: "SEARCH",
        settings: {
          query: { term: "bags" },
          typeOfRecords: ["KLEVU_PRODUCT"],
          limit: 12,
          typeOfSearch: "WILDCARD_AND",
        },
      },
    ],
  }).then((response) => {
    window.yourGlobalVariable = response.data.queryResults[0].records;
  });
  const allData = yield window.yourGlobalVariable;
  yield put({ type: SET_DATA, payload: allData });
}

export function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}

export default productSaga;
