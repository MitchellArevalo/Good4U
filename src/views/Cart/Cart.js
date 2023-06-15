import React from "react";

function Cart() {
  //Arreglar código: -Crear componentes de input y mapearlos, crear card del carrito, crear botón, acomodar los estílos para un css más límpio. Acomodar estílos
  return (
    <div>
      <h1 className="text-center font-bold text-3xl mb-12">
        Carrito de Compras
      </h1>
      <div className="flex gap-x-5">
        <div className="w-1/2 flex flex-col p-10 gap-y-8">
          <div className=" flex flex-col gap-y-5  ">
            <div className="flex py-2 gap-x-2 border-b-2 border-b-bg-whiteLight justify-around">
              <img className=" w-28" src="assets/img1.png" alt="Imagen1" />
              <div className="2/3 ">
                <h1 className="font-bold">Camiseta tela fría</h1>
                <p className="font-thin  text-greyLightOpra">Black/Medium</p>
                <span className="font-semibold">$50.000</span>
              </div>
              <div className=" h-max py-2 px-3 text-lg bg-whiteLight text-greyDarkOpra">
                <button> - </button>
                <span className="mx-2 "> 2 </span>
                <button> + </button>
              </div>
            </div>
            <div className="flex py-2 gap-x-2 border-b-2 border-b-bg-whiteLight justify-around">
              <img className=" w-28" src="assets/img1.png" alt="Imagen1" />
              <div className="2/3 ">
                <h1 className="font-bold">Camiseta tela fría</h1>
                <p className="font-thin  text-greyLightOpra">Black/Medium</p>
                <span className="font-semibold">$50.000</span>
              </div>
              <div className=" h-max py-2 px-3 text-lg bg-whiteLight text-greyDarkOpra">
                <button> - </button>
                <span className="mx-2 "> 2 </span>
                <button> + </button>
              </div>
            </div>
            <div className="flex py-2 gap-x-2 border-b-2 border-b-bg-whiteLight justify-around">
              <img className=" w-28" src="assets/img1.png" alt="Imagen1" />
              <div className="2/3 ">
                <h1 className="font-bold">Camiseta tela fría</h1>
                <p className="font-thin  text-greyLightOpra">Black/Medium</p>
                <span className="font-semibold">$50.000</span>
              </div>
              <div className=" h-max py-2 px-3 text-lg bg-whiteLight text-greyDarkOpra">
                <button> - </button>
                <span className="mx-2 "> 2 </span>
                <button> + </button>
              </div>
            </div>
            <div className="flex py-2 gap-x-2 border-b-2 border-b-bg-whiteLight justify-around">
              <img className=" w-28" src="assets/img1.png" alt="Imagen1" />
              <div className="2/3 ">
                <h1 className="font-bold">Camiseta tela fría</h1>
                <p className="font-thin  text-greyLightOpra">Black/Medium</p>
                <span className="font-semibold">$50.000</span>
              </div>
              <div className=" h-max py-2 px-3 text-lg bg-whiteLight text-greyDarkOpra">
                <button> - </button>
                <span className="mx-2 "> 2 </span>
                <button> + </button>
              </div>
            </div>
            <div className="flex py-2 gap-x-2 border-b-2 border-b-bg-whiteLight justify-around">
              <img className=" w-28" src="assets/img1.png" alt="Imagen1" />
              <div className="2/3 ">
                <h1 className="font-bold">Camiseta tela fría</h1>
                <p className="font-thin  text-greyLightOpra">Black/Medium</p>
                <span className="font-semibold">$50.000</span>
              </div>
              <div className=" h-max py-2 px-3 text-lg bg-whiteLight text-greyDarkOpra">
                <button> - </button>
                <span className="mx-2 "> 2 </span>
                <button> + </button>
              </div>
            </div>
            
          </div>
          <div className="flex flex-col   ">
            <button className=" self-end w-max p-3 text-black border-2  :  border-black ">
              Actualizar Carrito
            </button>

            <div className="flex : justify-between place-items-end  ">
              <input
                type="text"
                placeholder="Código de Descuento"
                className=": border-b-2 w-1/2 : mt-20 p-2 "
              />
              <button className="bg-black text-white p-3">Aplicar Cupón</button>
            </div>
          </div>
        </div>

        <div className="w-1/2 p-8">
          <h1 className=": font-bold text-2xl : mb-20">Totales del Carrito</h1>
          <div className="flex justify-between ">
          <p className=": uppercase font-bold mb-5">
            Subtotal:
          </p>
          <span className="text-greyLightOpra ">$65.000</span>
          </div>
          <div className="flex : justify-between  border-b-2">
            <span className="text-greyLightOpra">Envío</span>
            <div className="w-1/2">
              <p className="text-footer mb-5 ">
                Los costos de entrega se calculan automáticamente al escribir tu
                dirección.
              </p>
              <div className="flex flex-col  ">
                <span className="uppercase font-bold text-2xl ">
                  Calcular Envío
                </span>

                <input
                  type="text"
                  placeholder="País"
                  className=": border-b-2  w-full: mt-20 p-2 "
                />
                <input
                  type="text"
                  placeholder="Ciudad"
                  className=": border-b-2  w-full: mt-20 p-2 "
                />
                <input
                  type="text"
                  placeholder="Código Postal"
                  className=": border-b-2 w-full : mt-20 p-2 "
                />
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
