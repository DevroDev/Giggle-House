import React from "react";
import {Route,Switch} from 'react-router-dom';
import "./App.css";

import Navbar from './components/Navbar'

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import ShoppingCart from './pages/ShoppingCart'

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sneakers" component={Rooms} />
        <Route exact path="/sneakers/:slug" component={SingleRoom} />
        <Route exact path="/cart" component={ShoppingCart}/>
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
