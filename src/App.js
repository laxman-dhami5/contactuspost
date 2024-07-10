import { Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import CartProvider from "./components/store/CartProvider";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import ContactUs from "./components/pages/ContactUs";

const App = () => {
  const onAddData=async(enteredData)=>{
    const response=await fetch("https://contactpost-449b7-default-rtdb.firebaseio.com/form.json",{
      method:'POST',
      body: JSON.stringify(enteredData),
      headers:{
        'Content-type':'application/json'
      }
     })
     const data=await response.json()
     console.log(data)
  }
  return (
    <CartProvider>
      <Header />

      <Route path="/about">
        <About />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/store">
        <Items />
      </Route>
      <Route path="/contact-us">
        <ContactUs data={onAddData}/>
      </Route>
    </CartProvider>
  );
};

export default App;
