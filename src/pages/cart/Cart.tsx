import { Link } from "react-router";
import type { AddToCartProps } from "../../interfaces/addToCartAmount";

export default function Cart({totalAddToCartAmount}:AddToCartProps) {
  
  return (
    <div>
      <div className="bg-gradient-to-l from-orange-500 to-red-500 flex h-30 items-center">
        <div className="w-[20%]"></div>
        <div className="w-[60%]">
          <div className="flex justify-between items-center">
            <Link to='/' className='flex justify-between items-center w-[145px] cursor-pointer'>
              <img className='w-[45px]' src="/shoply-icon.png" alt="shoply-icon" />
              <p className='text-[30px] text-white'>Shoply</p>
            </Link>
            <div className="text-[20px] font-bold text-white">
              Checkout(
              <span className="font-normal italic">
                {`${totalAddToCartAmount} items`}
              </span>
              )
            </div>
            <div className="w-[145px]"></div>
          </div>
        </div>
        <div className="w-[20%]"></div>
      </div>
      <div className="flex">
        <div className='w-[20%]'></div>
        <div className='w-[60%]'>
          <div>
            <p className="text-[20px] font-bold pt-[40px]">Review your Order</p>
          </div>
          <div className="flex justify-between">
            <div>
              Cart here
            </div>
            <div>Order Summary</div>
          </div>

        </div>
        <div className='w-[20%]'></div>
      </div>
    </div>
  );
}