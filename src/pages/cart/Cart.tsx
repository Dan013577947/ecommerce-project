import type { AddToCartProps } from "../../interfaces/addToCartAmount";
import Header from "../../components/Header";
import { useEffect } from "react";
import axios from "axios";
export default function Cart({totalAddToCartAmount, setTotalAddToCartAmount}: AddToCartProps) {
  
  useEffect(()=>{
    const fetchCartData = async () => {
      const response = await axios.get('https://dummyjson.com/carts')
      console.log(response.data)
    }
    fetchCartData()
  },[])
  return (
    <div>
      <Header
        totalAddToCartAmount={totalAddToCartAmount}
        setTotalAddToCartAmount={setTotalAddToCartAmount}
      />
    </div>
  );
}