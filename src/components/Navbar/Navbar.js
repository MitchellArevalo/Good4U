// import React, { useState } from "react";
// import { NavLink, Link } from "react-router-dom";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import MenuIcon from "@mui/icons-material/Menu";
// import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
// import CloseIcon from "@mui/icons-material/Close";
// import Cart from "../Cart/Cart";

// const listItem = [
//   {
//     id: 1,
//     title: "Inicio",
//     path: "/",
//   },
//   {
//     id: 2,
//     title: "Productos",
//     path: "/products",
//   },
//   {
//     id: 3,
//     title: "Contactos",
//     path: "/contact",
//   },
// ];

// function Navbar() {
//   const [isMenuOpen, setMenuOpen] = useState(false);
//   const [isCart, setIsCart] = useState(false);

//   const handleToggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };
//   const toggleCart = () => {
//     setIsCart(!isCart);
//   };
//   return (
//     <>
//       <nav className=" flex justify-between items-center  px-8 py-5   bg-white z-20">
//         <span onClick={handleToggleMenu} className="sm:flex md:hidden  ">
//           <MenuIcon />
//         </span>
//         <Link to="/">
//           <img src="/assets/logoopra.png" alt="Logo Opra" />
//         </Link>
//         <ul className=" hidden md:relative md:top-0 md:flex md:flex-row md:bg-white md:text-black md:gap-10">
//           {listItem.map((item) => (
//             <li key={item.id} className="  md:border-none">
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   isActive ? "active: font-bold" : undefined
//                 }
//               >
//                 {item.title}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//         {isMenuOpen && (
//           <ul className=" flex items-center flex-col absolute :  h-screen  w-1/2  z-30 top-0 left-0 p-5  py-10 bg-blackOpra text-white  font-semibold cursor-pointer md:hidden">
//             {listItem.map((item) => (
//               <li
//                 key={item.id}
//                 className=": p-5  border-b-2 w-full text-center "
//               >
//                 <NavLink
//                   to={item.path}
//                   className={({ isActive }) =>
//                     isActive ? "active: font-bold" : undefined
//                   }
//                   onClick={handleToggleMenu}
//                 >
//                   {item.title}
//                 </NavLink>
//               </li>
//             ))}
//             <CloseIcon
//               onClick={handleToggleMenu}
//               style={{
//                 fontSize: "30px",
//                 position: "absolute",
//                 right: "0px",
//                 top: "10px",
//               }}
//             />
//           </ul>
//         )}
//         <div className="flex gap-x-2">
//           <NavLink to="/login">
//             <AccountCircleIcon />
//           </NavLink>
//           <div onClick={toggleCart}>
//             <LocalGroceryStoreIcon />
//           </div>
//         </div>
//       </nav>
//       {isCart && <Cart closeCart={toggleCart} />}
//     </>
//   );
// }

//  export default Navbar;
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import CloseIcon from "@mui/icons-material/Close";
import Cart from "../Cart/Cart";
function Navbar() {
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
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleToggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center px-8 py-5 bg-white z-20">
        <span onClick={handleToggleMenu} className="sm:flex md:hidden">
          <MenuIcon />
        </span>
        <Link to="/">
          <img src="/assets/logoopra.png" alt="Logo Opra" />
        </Link>
        <ul className="hidden md:flex md:flex-row md:bg-white md:text-black md:gap-5">
          {listItem.map((item) => (
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
          <div onClick={handleToggleCart}>
            <LocalGroceryStoreIcon />
          </div>
        </div>
        {isMenuOpen && (
          <ul className="flex items-center flex-col absolute h-full w-1/2 z-30 top-0 left-0 p-5 py-10 bg-black text-white font-semibold cursor-pointer md:hidden ">
            {listItem.map((item) => (
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
      {isCartOpen && <Cart closeCart={handleToggleCart} />}
    </>
  );
}

export default Navbar;
