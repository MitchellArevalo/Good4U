import CloseIcon from "@mui/icons-material/Close";

function CardCart({ product, addToCart, subtractToCart, removeToCart }) {
  return (
    <div className="flex flex-col ">
      <button
        onClick={() => removeToCart(product)}
        className=": self-end text-sm "
      >
        <CloseIcon />
      </button>
      <div className="flex py-2 gap-x-5 border-b-2 border-b-bg-whiteLight justify-around">
        <img className="w-1/4" src={product.image} alt={product.id} />
        <div className=" ">
          <h1 className="font-bold">{product.title}</h1>
          <p className="font-thin  text-greyLightOpra">{product.category}</p>
          <p className="font-thin  text-greyLightOpra">{`Talla : ${product.size}`}</p>
          <span className="font-semibold">{`$ ${product.price}`}</span>
        </div>
        <div className=" w-1/4 text-center  h-min py-2 text-lg bg-whiteLight text-greyDarkOpra">
          {product.quantity > 1 && (
            <button onClick={() => subtractToCart(product)}> - </button>
          )}
          <span className="mx-2 ">{product.quantity}</span>
          <button onClick={() => addToCart(product)}> + </button>
        </div>
      </div>
    </div>
  );
}

export default CardCart;
