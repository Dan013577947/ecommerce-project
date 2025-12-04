
export default function Header() {
  return (
    <div className='fixed w-full h-30 bg-gradient-to-l from-orange-500 to-red-500 flex'>
      <div className='w-[20%]'></div>
      <div className='w-[60%] flex justify-between items-center'>
        <div className='flex justify-between items-center w-[190px] cursor-pointer'>
          <img className='w-[45px]' src="/shoply-icon.png" alt="shoply-icon" />
          <p className='text-[30px] font-poppins text-white'>Shoply</p>
        </div>
        <div className="w-full mx-13 flex items-center">
          <input className='bg-white w-full h-10 rounded-[3px] px-4 min-w-[500px]' type="text" placeholder='Search' />
          <button className="bg-orange-500 h-9 w-15 -ml-[62px] rounded-[3px] flex justify-center items-center flex-shrink-0 cursor-pointer">
            <img className='w-[25px]' src="/search-icon.png" alt="search-icon" />
          </button>
        </div>
        <div className="w-[30px] flex justify-center items-center flex-shrink-0 cursor-pointer cursor-pointer">
          <img className='w-full' src="/cart-icon.png" alt="cart-icon" />
        </div>
      </div>
      <div className='w-[20%] flex justify-end'></div>
    </div>
  );
}