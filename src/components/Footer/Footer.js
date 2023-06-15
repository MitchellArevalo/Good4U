import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import { Avatar } from "@mui/material";
import FooterResponsive from "../FooterRes/FooterResponsive";

const listName = [
  {
    id: 1,
    name: "Mitchell Arévalo",
  },
  {
    id: 2,
    name: "Daniel Martínez",
  },
  {
    id: 3,
    name: "Jose Popayán",
  },
  {
    id: 4,
    name: "Fernando Arango",
  },
];

function Footer() {
  return (
    <footer className="flex flex-col gap-y-5 p-8   bg-whiteOpra ">
      <div className="lg:flex md:gap-x-5 hidden  ">
        <div className="w-1/4">
          <img className="w-24" src="/assets/logoopra.png" alt="Logo Opra" />
          <p className=": my-5 text-footer ">
            En Opra nos enfocamos en satisfacer las necesidades del cliente,
            buscando un servicio mas express al momento de entregar nuetros
            productos y estar siempre conectados para estar en constante mejora
          </p>
        </div>
        <div className="w-1/4 ">
          <h2 className="title-footer">Siempre a tu servicio</h2>
          <div className="my-10 text-footer flex flex-col gap-y-4">
            <p>
              <MailOutlineIcon sx={{ color: "#3A86FF" }} /> opra@gmail.com
            </p>
            <p>
              <PhoneIcon sx={{ color: "#3A86FF" }} />
              +57 318 547 2589
            </p>
          </div>
        </div>

        <div className="w-1/4">
          <div className="flex gap-x-1">
            {listName.map((item) => (
              <Avatar
                key={item.id}
                alt={item.name}
                sx={{ backgroundColor: "#3A86FF" }}
                src="/broken-image.jpg"
              />
            ))}
          </div>
          <p className="text-footer my-8 font-bold">
            Nuestros asesores te atenderán con el mayor de los gustos
          </p>
        </div>

        <div className="w-1/4 ">
          <h2 className="title-footer">
            Únete para estar informado de todos nuestro productos
          </h2>
          <p className="text-footer my-5">
            Déjanos tu email para recibir novedades en nuestra tienda
          </p>
          <form className="flex flex-col items-start gap-y-4">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="py-2 px-8 border-2 rounded-lg border-blueOpra  text-greyLightOpra placeholder:text-greyLightOpra"
            />
            <button className="bg-blueOpra text-white px-8 py-2 rounded-lg">
              Suscribirse
            </button>
          </form>
        </div>
      </div>

      <FooterResponsive />

      <div className="text-greyDarkOpra">
        <h2 className="text-xl font-semibold">&copy; Copyright Opra Design</h2>
        <p className="text-sm ">
          Desarrollado por: Adrumar, Valeria Jiménez Bedoya, Jose David Diaz,
          Fernando Arango
        </p>
      </div>
    </footer>
  );
}

export default Footer;
