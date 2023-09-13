import DeleteIcon from "@mui/icons-material/Delete";
function CardCart({ product, addToCart, subtractToCart, removeToCart }) {
  console.log("Producto carrito:", product);
  return (
    <div className="flex flex-col">
      <div className="flex py-2 gap-x-5 border-b-2 border-b-bg-whiteLight justify-around items-center">
        <img
          className="w-1/4 h-40"
          src={product.image}
          alt={product.itemCode}
        />{" "}
        {/* Ajusta el alto aquí */}
        <div className="">
          <h1 className="font-bold">{product.name}</h1>
          <p className="font-thin text-greyLightOpra">
            {product.category.nameCategory}
          </p>
          <p className="font-thin text-greyLightOpra">{`Talla : ${product.size}`}</p>
        </div>
        <div className="w-1/5 text-center h-min p-1 rounded-md text-lg bg-whiteLight text-greyDarkOpra">
          {product.quantity > 1 && (
            <button onClick={() => subtractToCart({ product })}> - </button>
          )}
          <span className="mx-2">{product.quantity}</span>
          <button onClick={() => addToCart({ product })}> + </button>
        </div>
        <div className="flex flex-col justify-between items-center pt-2 pb-5 w-1/3">
          <button onClick={() => removeToCart(product)} className="text-sm">
            <DeleteIcon />
          </button>
          <p className="text-lg">{`$ ${product.salesPrice}`}</p>
        </div>
      </div>
    </div>
  );
}

export default CardCart;
