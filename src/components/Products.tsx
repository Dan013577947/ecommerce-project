import { type ProductsList } from "../interfaces/products";

interface Products {
  products: ProductsList | null;
}
export default function Products({ products }: Products) {
  return (
    <div className="pt-35 flex">
      <div className='w-[20%]'></div>
      <div className='w-[60%]'>
        <div className="grid grid-cols-[100px_100px_100px_100px_100px_100px] gap-x-25 gap-y-3">
          {products?.products.map(product => {
            // console.log(product.title, product.images, product.reviews)
            return (
              <div key={product.id} className="bg-white w-47 h-70 shadow-[0px_0px_2px_rgba(0,0,0,0.4)] p-2 cursor-pointer flex flex-col justify-between">
                <div>
                  {product.images.length === 1 ? product.images.map(image => {
                    return (
                      <div key={crypto.randomUUID()}>
                        <img src={image} alt="" />
                      </div>
                    );
                  }) : product.images.map((image, index) => {
                    if (index === 0) {
                      return (
                        <div key={crypto.randomUUID()}>
                          <img src={image} />
                        </div>
                      );
                    }
                    else {
                      return (
                        <div key={crypto.randomUUID()}></div>
                      );
                    }

                  })}
                </div>
                <p className="text-[15px]">{product.title}</p>
                <p className="text-orange-500 font-medium">{"\u20B1"}{product.price}</p>

              </div>
            );

          })}
        </div>
      </div>
      <div className='w-[20%]'></div>
    </div>
  );
}