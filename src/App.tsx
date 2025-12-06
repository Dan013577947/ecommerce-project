import axios from "axios";
import Header from "./components/Header";
import Products from "./components/Products";
import { useEffect, useState } from "react";
import { type ProductsList } from "./interfaces/products";
import Footer from "./components/Footer";


function App() {
  const [productsList, setProductsList] = useState<ProductsList | null>(null);
  const [totalAddToCartAmount, settotalAddToCartAmount] = useState<number>(0)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<ProductsList>('https://dummyjson.com/products')
        setProductsList(response.data)
      }
      catch (error) {
        console.log("Error fetching products", error)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div>
      <Header
        totalAddToCartAmount={totalAddToCartAmount}
        settotalAddToCartAmount={settotalAddToCartAmount}
      />
      <Products
        products={productsList}
        totalAddToCartAmount={totalAddToCartAmount}
        settotalAddToCartAmount={settotalAddToCartAmount}
      />
      <Footer />
    </div>
  );
}

export default App
