  import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import orderReducer from "./store/reducers/Order";
import reducer from "./store/reducers/BurgerBuilderReducer";
import App from "./App";
import "./styles.css";

const rootReducer = combineReducers({
  order: orderReducer,
  burgerBuilderReducer: reducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);
