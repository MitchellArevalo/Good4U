import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

const listItem = [
  {
    id: 1,
    title: "Inicio",
    path: "/",
  },
  {
    id: 2,
    title: "Productos",
    path: "/products",
  },
  {
    id: 3,
    title: "Contactos",
    path: "/contact",
  },
];

function Navbar() {
  const [isResponsive, setIsResponsive] = useState(true);

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      setIsResponsive(true);
    } else {
      setIsResponsive(false);
    }
  });

  const handledClick = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <nav className=" flex justify-between items-center  px-8 py-5   bg-white z-20">
      <span onClick={handledClick} className="sm:flex md:hidden  ">
        <MenuIcon />
      </span>
      <Link to="/">
        <img src="/assets/logoopra.png" alt="Logo Opra" />
      </Link>
      {isResponsive && (
        <ul className="absolute top-20 left-0 p-5 bg-black text-white h-full font-semibold cursor-pointer md:relative md:top-0 md:flex items-center md:bg-white md:text-black md:items-center md:gap-x-10">
          {listItem.map((item) => (
            <li key={item.id} >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "active: font-bold" : undefined
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
      <div className="flex gap-x-2">
        <NavLink to="/login"><AccountCircleIcon /></NavLink>
        <NavLink to="/cart"><LocalGroceryStoreIcon /></NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
