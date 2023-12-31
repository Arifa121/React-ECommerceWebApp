import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        theme="dark"
        autoClose={2000}
        closeOnClick
        pauseOnHover={false}
      />
      {/* Same as */}
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
