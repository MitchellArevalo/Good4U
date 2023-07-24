import CloseIcon from "@mui/icons-material/Close";

function CardCart({ product, addToCart,subtractToCart, removeToCart }) {
  return (
    <div className="flex flex-col ">
      <button
        onClick={() => removeToCart(product)}
        className=": self-end text-sm "
      >
        <CloseIcon />
      </button>

      <div className="flex py-2 gap-x-2 border-b-2 border-b-bg-whiteLight justify-around">
        <img className=" w-28" src={product.image} alt="Imagen1" />
        <div className="2/3 ">
          <h1 className="font-bold">{product.name}</h1>
          <p className="font-thin  text-greyLightOpra">Black/Medium</p>
          <span className="font-semibold">$50.000</span>
        </div>
        <div className=" h-max py-2 px-3 text-lg bg-whiteLight text-greyDarkOpra">
          {product.quantity>1 && <button onClick={()=>subtractToCart(product)}> - </button>}
          <span className="mx-2 ">{product.quantity}</span>
          <button onClick={() => addToCart(product)}> + </button>
        </div>
      </div>
    </div>
  );
}

export default CardCart;
