import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import CloseIcon from "@mui/icons-material/Close";
import Cart from "../Cart/Cart";
const itemsMenu = [
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
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // useEffect(() => {
  //   document.body.classList.toggle("overflow-hidden", isCartOpen || isMenuOpen);
  //   return () => {
  //     document.body.classList.remove("overflow-hidden");
  //   };
  // }, [isCartOpen, isMenuOpen]);

  return (
    <div className="relative">
      <nav className="flex justify-between items-center px-8 py-5 bg-white">
        <span onClick={handleToggleMenu} className="sm:flex md:hidden">
          <MenuIcon />
        </span>
        <Link to="/">
          <img src="/assets/logoopra.png" alt="Logo Opra" />
        </Link>
        <ul className="hidden md:flex md:flex-row md:bg-white md:text-black md:gap-5">
          {itemsMenu.map((item) => (
            <li key={item.id} className="p-2 text-center">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "font-bold" : undefined
                }
                onClick={handleToggleMenu}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex gap-x-2 ">
          <NavLink to="/login">
            <AccountCircleIcon />
          </NavLink>
          <Link to="/cart">
            {" "}
            <LocalGroceryStoreIcon />
          </Link>
        </div>
        {isMenuOpen && (
          <ul className="flex items-center flex-col absolute h-screen w-1/2 z-50 top-0 left-0 p-5 py-10 bg-black text-white font-semibold cursor-pointer md:hidden ">
            {itemsMenu.map((item) => (
              <li key={item.id} className="p-5 border-b-2 w-full text-center">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "active:font-bold" : undefined
                  }
                  onClick={handleToggleMenu}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
            <CloseIcon
              onClick={handleToggleMenu}
              style={{
                fontSize: "30px",
                position: "absolute",
                right: "0px",
                top: "10px",
              }}
            />
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
