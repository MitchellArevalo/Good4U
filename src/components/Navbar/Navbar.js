import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import CloseIcon from '@mui/icons-material/Close';

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
  const [isResponsive, setIsResponsive] = useState(false);


  const handledOpen = () => {
    setIsResponsive(true);
  };
  const handledClose = () => {
    setIsResponsive(false);
  };
  return (
    <nav className=" flex justify-between items-center  px-8 py-5   bg-white z-20">
      <span onClick={handledOpen} className="sm:flex md:hidden  ">
        <MenuIcon />
      </span>
      <Link to="/">
        <img src="/assets/logoopra.png" alt="Logo Opra" />
      </Link>
      <ul className=" hidden md:relative md:top-0 md:flex md:flex-row md:bg-white md:text-black md:gap-10">
          {listItem.map((item) => (
            <li key={item.id} className="  md:border-none" >
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
       {isResponsive && (
        <ul className=" flex items-center flex-col absolute :  h-screen  w-1/2  z-30 top-0 left-0 p-5  py-10 bg-blackOpra text-white  font-semibold cursor-pointer md:hidden">
          {listItem.map((item) => (
            <li key={item.id}  className=": p-5  border-b-2 w-full text-center " >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "active: font-bold" : undefined
                }
                onClick={handledClose}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
          <CloseIcon onClick={handledClose} style={{fontSize:"30px", position:"absolute", right:"0px",top:"10px" }}/>
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
