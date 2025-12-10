import axios from "axios";
import { type ProductsList } from "../../interfaces/products";
import Header from "../../components/Header";
import Products from "./Products";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import type { AddToCartProps } from "../../interfaces/addToCartAmount";

// interface Prop {
//   id:number;
//   quantity:number;
// }
export default function Home({totalAddToCartAmount, setTotalAddToCartAmount}: AddToCartProps) {
  const [productsList, setProductsList] = useState<ProductsList | null>(null);

  // const [test, setTest] = useState<Prop[]>([{id:1,quantity:1}])

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


  // const handleClick = () =>{
  //   setTest(prev=>{
  //     const existing = prev.find(item => item.id === 2)
  //     if(existing){
  //       return prev.map(item=>item.id === 2
  //         ? {...item, quantity:item.quantity+1}
  //         : item
  //       )
  //     }

  //     return [...prev, {id:2, quantity:1}]
  //   })
  // }

  // console.log(test)
  return (
    <div>
      {/* <button onClick={handleClick}>Click Me</button> */}
      <Header
        totalAddToCartAmount={totalAddToCartAmount}
        setTotalAddToCartAmount={setTotalAddToCartAmount}
      />
      <Products
        products={productsList}
        setTotalAddToCartAmount={setTotalAddToCartAmount}
      />
      <Footer />
    </div>
  );
}