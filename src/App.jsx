import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Store from "./components/Store";
import Navbar from "./components/Navbar";
import { Dots } from "react-preloaders";
import Home from "./components/Home";
import NewProducts from "./components/NewProducts";
import Footer from "./components/Footer";
import UserLogin from "./components/UserLogin";
import AdminDashboard from "./components/AdminDashboard";
import { Navigate } from "react-router-dom";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleAddToCart = (product) => {
    const itemExists = cartItems.find(cartItem => cartItem.id === product.id);
    
    if (itemExists) {
      // If the item already exists, increase the quantity
      const updatedCart = cartItems.map(cartItem =>
        cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedCart);
    } else {
      // If the item doesn't exist, add it to the cart with an initial quantity of 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveCartItem = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };


  return (
    <Router>
      <Dots color={"#000"} loading={true} />
      <div className="App">
        <Navbar cartItems={cartItems} handleRemoveCartItem={handleRemoveCartItem} handleSearch={handleSearch} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/store"
            element={<Store handleAddToCart={handleAddToCart} searchTerm={searchTerm} />}
          />
          <Route path="/new-products" element={<NewProducts />} />
          <Route path="/login" element={<UserLogin setIsLoggedIn={setIsLoggedIn} />}  />
          <Route path="/dashboard" element={isLoggedIn ? <AdminDashboard /> : <Navigate to="/login" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
