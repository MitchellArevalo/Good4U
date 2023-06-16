import React from "react";
import Input from "../../components/Input/Input";
import CardCart from "../../components/CardCart/CardCart";


const listInput = [
  "Pais", "Ciudad", "Código Postal"
]

function Cart() {
  //Arreglar código: crear card del carrito, crear botón, acomodar los estílos para un css más límpio. Acomodar estílos
  return (
    <div className="m-8">
      <h1 className="text-center font-bold text-3xl mb-12">
        Carrito de Compras
      </h1>
      <div className=" flex flex-col  items-center    md:flex-row md:gap-x-5">
        <div className=" w-full md:w-1/2 flex flex-col gap-8">
          <div className=" flex flex-col gap-y-5 h-1/2 ">
            {
              listInput.map((item, index) => (
                <CardCart key={index} />
              ))
            }
          </div>
          <div className=":h-1/4 / flex flex-col ">
            <button className=" self-center md:self-end h-min  w-max p-3 text-black border-2  :  border-black ">
              Actualizar Carrito
            </button>
            <div className="flex : justify-between : gap-x-20 ">
              <Input placeholder="Código de descuento" />
              <button className="bg-black text-white self-end p-3">Aplicar Cupón</button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 p-8">
          <h1 className=": font-bold text-2xl  text-center mb-20">Totales del Carrito</h1>
          <div className="flex justify-between ">
            <p className=": uppercase font-bold mb-5">
              Subtotal:
            </p>
            <span className="text-greyLightOpra ">$65.000</span>
          </div>
          <div className="flex  gap-x-20"> 
            <span className="text-greyLightOpra">Envío</span>
            <p className="text-footer mb-5 ">
              Los costos de entrega se calculan automáticamente al escribir tu
              dirección.
            </p>
          </div>
          <div className="flex  flex-col items-center  md:justify-between  border-b-2 md:items-end">
            <div className="w-1/2">
              <div className="flex flex-col  ">
                <span className="uppercase font-bold text-2xl ">
                  Calcular Envío
                </span>
                {
                  listInput.map((item, index) => (
                    <Input key={index} placeholder={item} />
                  ))
                }
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
            <button className="font-bold bg-black w-full mt-5 text-white p-3">
              Aplicar Cupón
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
