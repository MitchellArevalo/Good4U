// // <<<<<<< HEAD:src/components/Cart/Cart.js
// // import React from "react";
// // import Input from "../Input/Input";
// // import CardCart from "../CardCart/CardCart";
// // import { Link } from "react-router-dom";
// // import CloseIcon from "@mui/icons-material/Close";
// // import { useCart } from "../../hooks/useCart";

// const listInput = ["Pais", "Ciudad", "Código Postal"];

// function Cart({ closeCart }) {
//   const { cart,addToCart,subtractToCart,removeToCart,clearToCart } = useCart();
//   //Arreglar código: crear card del carrito, crear botón, acomodar los estílos para un css más límpio. Acomodar estílos
//   return (
//     // <div className=" flex flex-col gap-y-4 absolute h-min-full w-full bg-white  ">

//     <div className="absolute flex flex-col top-30 right-0 left-0 bg-white shadow-lg p-12 z-30 ">
//       <div onClick={closeCart} style={{ alignSelf: "end" }}>
//         <CloseIcon
//           style={{
//             fontSize: "30px",
//           }}
//         />
//       </div>
//       <h1 className="text-center font-bold text-3xl mb-12">
//         Carrito de Compras
//       </h1>
//       {cart.length === 0 ? (
//         <p>No hay productos en su carrito</p>
//       ) : (
//         <div className=" flex flex-col  items-center    md:flex-row md:gap-x-5">
//           <div className=" w-full md:w-1/2 flex flex-col gap-8">
//             <div className=" flex flex-col gap-y-5 h-1/2 ">
//               {cart.map((item ) => (
//                 <CardCart key={item.id} product={item} addToCart={addToCart} subtractToCart={subtractToCart} removeToCart={removeToCart} />
//               ))}
//             </div>
//             <div className="h-1/4  flex flex-col : ">
//               <button  onClick={clearToCart} className="p-3 text-black border-2  w-1/2  border-black  md:self-end ">
//                 Limpiar Carrito
//               </button>
//               <div className="flex  justify-between  gap-x-20 ">
//                 <Input placeholder="Código de descuento" />
//                 <button className="bg-black text-white  p-3 self-end  w-full	">
//                   Aplicar Cupón
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="md:w-1/2 p-5">
//             <h1 className=": font-bold text-xl uppercase  text-center my-8">
//               Totales del Carrito
//             </h1>
//             <div className="flex justify-between ">
//               <p className=": uppercase font-bold mb-5">Subtotal:</p>
//               <span className="text-greyLightOpra ">$65.000</span>
//             </div>
//             <div className="flex  justify-between ">
//               <span className="text-greyLightOpra">Envío</span>
//               <p className="text-footer mb-5 w-1/2  text-end">
//                 Los costos de entrega se calculan automáticamente al escribir tu
//                 dirección.
//               </p>
//             </div>
//             <div className="flex  flex-col items-center  md:justify-between  border-b-2 md:items-end  ">
//               <div className="md:w-1/2 w-full ">
//                 <div className="flex flex-col  ">
//                   <span className="uppercase font-bold text-xl text-center  md:text-start ">
//                     Calcular Envío
//                   </span>
//                   {listInput.map((item, index) => (
//                     <Input key={index} placeholder={item} />
//                   ))}
//                 </div>
//                 <button className="w-full p-3 border-2  font-bold my-5 border-black ">
//                   Actualizar Totales
//                 </button>
//               </div>
//             </div>
//             <div className="">
//               <div className="flex items-center justify-between text-lg font-bold my-5">
//                 <span>Total:</span>
//                 <span>$65.000</span>
//               </div>
//               <Link to="/checkout">
//                 <button className="font-bold bg-black w-full mt-5 text-white p-3">
//                   Comprar
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;
// =======
import React from "react";
import Input from "../Input/Input";
import CardCart from "../CardCart/CardCart";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useCart } from "../../hooks/useCart";

const listInput = ["Pais", "Ciudad", "Código Postal"];

function Cart({ closeCart }) {
  const { cart,addToCart,subtractToCart,removeToCart,clearToCart } = useCart();
  //Arreglar código: crear card del carrito, crear botón, acomodar los estílos para un css más límpio. Acomodar estílos
  return (
    // <div className=" flex flex-col gap-y-4 absolute h-min-full w-full bg-white  ">

    <div className="absolute flex flex-col top-30 right-0 left-0 bg-white shadow-lg p-12 z-30 ">
      <div onClick={closeCart} style={{ alignSelf: "end" }}>
        <CloseIcon
          style={{
            fontSize: "30px",
          }}
        />
      </div>
      <h1 className="text-center font-bold text-3xl mb-12">
        Carrito de Compras
      </h1>
      {cart.length === 0 ? (
        <p>No hay productos en su carrito</p>
      ) : (
        <div className=" flex flex-col  items-center    md:flex-row md:gap-x-5">
          <div className=" w-full md:w-1/2 flex flex-col gap-8">
            <div className=" flex flex-col gap-y-5 h-1/2 ">
              {cart.map((item ) => (
                <CardCart key={item.id} product={item} addToCart={addToCart} subtractToCart={subtractToCart} removeToCart={removeToCart} />
              ))}
            </div>
            <div className="h-1/4  flex flex-col : ">
              <button  onClick={clearToCart} className="p-3 text-black border-2  w-1/2  border-black  md:self-end ">
                Limpiar Carrito
              </button>
              <div className="flex  justify-between  gap-x-20 ">
                <Input placeholder="Código de descuento" />
                <button className="bg-black text-white  p-3 self-end  w-full	">
                  Aplicar Cupón
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-5">
            <h1 className=": font-bold text-xl uppercase  text-center my-8">
              Totales del Carrito
            </h1>
            <div className="flex justify-between ">
              <p className=": uppercase font-bold mb-5">Subtotal:</p>
              <span className="text-greyLightOpra ">$65.000</span>
            </div>
            <div className="flex  justify-between ">
              <span className="text-greyLightOpra">Envío</span>
              <p className="text-footer mb-5 w-1/2  text-end">
                Los costos de entrega se calculan automáticamente al escribir tu
                dirección.
              </p>
            </div>
            <div className="flex  flex-col items-center  md:justify-between  border-b-2 md:items-end  ">
              <div className="md:w-1/2 w-full ">
                <div className="flex flex-col  ">
                  <span className="uppercase font-bold text-xl text-center  md:text-start ">
                    Calcular Envío
                  </span>
                  {listInput.map((item, index) => (
                    <Input key={index} placeholder={item} />
                  ))}
                </div>
                <button className="w-full p-3 border-2  font-bold my-5 border-black ">
                  Actualizar Totales
                </button>
              </div>
            </div>
            <div className="">
              <div className="flex items-center justify-between text-lg font-bold my-5">
                <span>Total:</span>
                <span>$65.000</span>
              </div>
              <Link to="/checkout">
                <button className="font-bold bg-black w-full mt-5 text-white p-3">
                  Comprar
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
