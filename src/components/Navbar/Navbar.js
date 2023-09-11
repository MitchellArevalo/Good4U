import React, { useState, useEffect } from "react";
import { useCart } from "../../hooks/useCart";
import { NavLink, Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuIcon from "@mui/icons-material/Menu";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import CloseIcon from "@mui/icons-material/Close";
import { useAuth } from "../../hooks/useAuth";
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
  const { isAuth, logOutUser } = useAuth();
  const { cart } = useCart();

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Bloquear el scroll cuando se monta el componente
    document.body.classList.toggle("overflow-hidden", isMenuOpen);

    // Habilitar el scroll cuando se desmonta el componente
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

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
        <div className="flex gap-x-5 ">
          {!isAuth ? (
            <NavLink to="/login">
              <AccountCircleIcon />
            </NavLink>
          ) : (
            <LogoutRoundedIcon onClick={logOutUser} />
          )}
          <div className="flex items-center relative">
            <Link to="/cart">
              <LocalGroceryStoreIcon />
            </Link>
            {cart.length > 0 && (
              <div className="absolute rounded-full : : bg-blueOpra w-4 h-4 flex items-center justify-center text-white text-xs top-0 -mt-2 -mr-1 right-0">
                {cart.length}
              </div>
            )}
          </div>
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
