import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Spinner from "./Components/Spinner";
import { Provider } from "react-redux";
import store from './store'
import Routes from './Routes/routes'
import { setupAxios } from "./Utils";
import axios from "axios";
import { ToastContainer } from "react-toastify";

const { PUBLIC_URL } = process.env;

setupAxios(axios, store)

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Suspense fallback={<Spinner isSuspense />}>
        <BrowserRouter basename={PUBLIC_URL}>
          <Routes />
        </BrowserRouter>
      </Suspense>
    </Provider >
  );
}

export default App;
