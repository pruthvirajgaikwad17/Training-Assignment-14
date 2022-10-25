//import { applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import { productSaga } from "./productSaga";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
  devTools:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
});

sagaMiddleware.run(productSaga);
export default store;
