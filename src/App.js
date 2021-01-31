import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Payment from "./components/Payment/Payment";

import { auth } from "./firebase";
import { useStateValue } from "./context/StateProvider";
import Orders from "./components/Orders/Orders";


const App = () => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads.
    auth.onAuthStateChanged((authUser) => {
      // console.log("The User is >>>", authUser);
      if (authUser) {
        // user just logged in / alrdy logged on.
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user just logged out/ alrdy logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
              <Payment />
            {/* <Footer /> */}
          </Route>
          <Route path="/">
            <Header />
            <Navbar />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
