import type { AddToCartProps } from "../../interfaces/addToCartAmount";
import Header from "../../components/Header";
export default function Cart({totalAddToCartAmount, setTotalAddToCartAmount}: AddToCartProps) {
  return (
    <div>
      <Header
        totalAddToCartAmount={totalAddToCartAmount}
        setTotalAddToCartAmount={setTotalAddToCartAmount}
      />
    </div>
  );
}