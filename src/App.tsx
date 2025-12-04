import axios from "axios";
import Header from "./components/Header";
import Products from "./components/Products";
import { useEffect, useState } from "react";
import { type ProductsList } from "./interfaces/products";
import Footer from "./components/Footer";


function App() {
  const [productsList, setProductsList] = useState<ProductsList | null>(null);

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
      <Header />
      <Products products={productsList} />
      <Footer />
    </div>
  );
}

export default App
