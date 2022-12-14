import React, { Component } from "react";
import NavBar from "./components/navbar";
import { Route, Switch } from "react-router-dom";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
          <Route path={"/products"} component={Products}/>
          <Route path={"/posts"} component={Posts}/>
          <Route path={"/admin"} component={Dashboard}/>
          <Route path={"/"} component={Home}/>
          </Switch>      
        </div>
      </div>
    );//use exact in home component to avoid render home in other pages. Or, using Switch in react-router-dom
  }//we should order out routes from the most specific one to generic one , when using switch. because switch considered 1st matching route and ignore others
}

export default App;
