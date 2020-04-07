import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { Router, hashHistory } from "react-router";
import routes from "./router";
import reducer from "./reducers";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const store = createStore(reducer, applyMiddleware(...middleware));

const App = () => (
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>
);

render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept("./router", function() {
    render(<App key={Math.random()} />, document.getElementById("root"));
  });
}
