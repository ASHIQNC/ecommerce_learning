import "./App.css";

import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wishlist from "./pages/wishlist";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="cart" element={<Cart></Cart>}></Route>
        <Route path="wishlist" element={<Wishlist></Wishlist>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
