import DeleteIcon from '@mui/icons-material/Delete';
function CardCart({ product, addToCart, subtractToCart, removeToCart }) {
  return (
    <div className="flex flex-col ">
      <div className="flex py-2 gap-x-5 border-b-2 border-b-bg-whiteLight justify-around">
        <img className="w-1/4" src={product.image} alt={product.id} />
        <div className=" ">
          <h1 className="font-bold">{product.title}</h1>
          <p className="font-thin  text-greyLightOpra">{product.category}</p>
          <p className="font-thin  text-greyLightOpra">{`Talla : ${product.size}`}</p>
        </div>
        <div className=" w-1/5 text-center h-min p-1 rounded-md text-lg bg-whiteLight text-greyDarkOpra">
          {product.quantity > 1 && (
            <button onClick={() => subtractToCart(product)}> - </button>
          )}
          <span className="mx-2 ">{product.quantity}</span>
          <button onClick={() => addToCart(product)}> + </button>
        </div>
        <div className='flex flex-col justify-between items-center pt-2 pb-5 w-1/3'>
          <button
            onClick={() => removeToCart(product)}
            className=":  text-sm "
          >
            <DeleteIcon />
          </button>
          <p className=" text-lg">{`$ ${product.price}`}</p>
        </div>
      </div>
    </div>
  );
}

export default CardCart;
