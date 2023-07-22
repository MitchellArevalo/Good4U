import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
function Checkout() {
  return (
    <div>
      <h1>Finalizar Compra</h1>
      <section>
        <div>
          <p>
            ¿Ya tienes cuenta?<Link>Haz click aquí para iniciar sesión</Link>
          </p>
          <p>
            ¿Tienes un cupón de descuento?
            <Link>Haz click aquí para poder redimirlo</Link>
          </p>

          <div>
            <p>
              Luego de escribir tu código, por favor selecciona aplicar cupón
            </p>
            <div className="flex  justify-between  gap-x-20 ">
              <Input placeholder="Código de descuento" />
              <button className="bg-black text-white  p-3 self-end  w-full	">
                Aplicar Cupón
              </button>
            </div>

            <h2>Detalles de Pago</h2>
            <form>
              <div>
                <Input placeholder={"Nombres"} />
                <Input placeholder={"Apellidos"} />
              </div>
              <Input placeholder={"Company Name"} />
              <Input placeholder={"País"} />
              <Input placeholder={"Dirección"} />
              <Input placeholder={"Código Postal"} />
              <Input placeholder={"Ciudad"} />
              <Input placeholder={"Teléfono"} />
              <Input placeholder={"Correo electrónico"} />
              <input type="checkbox" />
              <span>¿Crear cuenta?</span>
              <Input placeholder={"Número de la orden"} />
            </form>
          </div>
        </div>

        <div>
            <h2>Tu orden</h2>
            <div>
                
            </div>
        </div>
      </section>
    </div>
  );
}

export default Checkout;
