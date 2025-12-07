import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import { useState } from "react";

function App() {
  const [totalAddToCartAmount, setTotalAddToCartAmount] = useState<number>(0)

  return (
    <Routes>
      <Route element={
        <Home
          totalAddToCartAmount={totalAddToCartAmount}
          setTotalAddToCartAmount={setTotalAddToCartAmount}
        />} path="/" />
      <Route element={
        <Cart
          totalAddToCartAmount={totalAddToCartAmount}
          setTotalAddToCartAmount={setTotalAddToCartAmount}
        />} path="/cart" />
    </Routes>
  );
}

export default App
