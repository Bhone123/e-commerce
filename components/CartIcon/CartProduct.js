import Image from "next/image";
import CartProductAction from "./CartProductAction";
import CartDelete from "./Cart.Delete";


const CartProduct = ({ product }) => {
  const DiscountTotalPrice=  Math.round(
    product.price - product.price * (product.discountPercentage / 100)
    )
    const Totalprice = DiscountTotalPrice * product.orderQuantity;
    console.log(Totalprice);
    return (
    
    <div className="flex gap-x-5 mb-5 relative">
      <div className="w-[40%]">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={500}
          height={500}
          className="w-[200px] h-[120px]  object-cover"
        />
      </div>
      <div>
        <h3>{product.title}</h3>
        {product.discountPercentage && (
          <p className="text-violet-900 text-base font-medium">
            $
            {Math.round(
              product.price - product.price * (product.discountPercentage / 100)
            )}
          </p>
          
        )}
         <p className="text-xs ">{product.stock} items left!</p>
        <div>
          <CartProductAction product={product} />
          </div>
          <p><span className="text-violet-800 font-bold">Total = </span>${Totalprice}</p>
      </div>
      <CartDelete product_id={product.id}/>
    </div>
    
  );
};

export default CartProduct;
