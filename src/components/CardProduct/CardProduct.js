import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

function CardProduct({ product, isCart }) {
  const styleIcon = {
    fontSize: "25px",
    alignSelf: "end",
    color: isCart ? "red" : "#09f",
  };

  console.log(product);
  return (
    <div className=" flex items-center gap-5 p-2 shadow-md md:flex-col md:w-3/4 md:items-start">
      <img src={product.image} alt={product.name} className="w-1/3 md:w-full" />
      <div className="flex flex-col gap-3 w-full ; pr-5 pb-5">
        <h2 className="font-semibold">{product.name}</h2>
        <p className="font-bold ">{`$ 3000`}</p>
        {isCart ? (
          <RemoveShoppingCartIcon style={styleIcon} />
        ) : (
          <AddShoppingCartIcon style={styleIcon} />
        )}
      </div>
    </div>
  );
}

export default CardProduct;
